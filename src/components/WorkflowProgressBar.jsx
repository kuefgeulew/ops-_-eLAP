function isStepCompleted(index, completedSteps) {
  return completedSteps.includes(index)
}

function isSegmentHighlighted(leftIndex, currentStep, completedSteps) {
  const leftDone = isStepCompleted(leftIndex, completedSteps)
  const rightDone = isStepCompleted(leftIndex + 1, completedSteps)
  const touchesCurrent = currentStep === leftIndex || currentStep === leftIndex + 1
  return (leftDone && rightDone) || touchesCurrent
}

function WorkflowProgressBar({
  steps,
  currentStep,
  completedSteps,
  onStepClick,
  trackingId,
  onExit,
  businessName,
  queriesByStep = {},
}) {
  if (!steps || steps.length === 0) {
    return null
  }

  const dense = steps.length > 10
  const dotSize = dense ? 'h-[8px] w-[8px]' : 'h-[10px] w-[10px]'
  const currentLabel = steps[currentStep]?.label ?? ''

  return (
    <div className="sticky top-0 z-50 border-b border-[#e8ecef] bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onExit}
          className="shrink-0 border-0 bg-transparent p-0 text-sm text-[#0077c8]"
        >
          ← Dashboard
        </button>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-sm text-[#6a7380]">
          {trackingId}
        </span>
        <button
          type="button"
          onClick={onExit}
          className="shrink-0 border-0 bg-transparent p-0 text-sm text-[#6a7380] hover:text-[#1f2328]"
        >
          Exit ✕
        </button>
      </div>

      <div className="mt-3 flex w-full min-w-0 items-start">
        {steps.map((step, index) => {
          const completed = isStepCompleted(index, completedSteps)
          const isCurrent = index === currentStep

          const leftLine =
            index > 0 ? (
              <div
                className={`mx-0.5 h-[2px] min-w-[4px] flex-1 ${
                  isSegmentHighlighted(index - 1, currentStep, completedSteps)
                    ? 'bg-[#0077c8]'
                    : 'bg-[#e8ecef]'
                }`}
              />
            ) : (
              <div className="min-w-0 flex-1" />
            )

          const rightLine =
            index < steps.length - 1 ? (
              <div
                className={`mx-0.5 h-[2px] min-w-[4px] flex-1 ${
                  isSegmentHighlighted(index, currentStep, completedSteps)
                    ? 'bg-[#0077c8]'
                    : 'bg-[#e8ecef]'
                }`}
              />
            ) : (
              <div className="min-w-0 flex-1" />
            )

          const dotClass = isCurrent
            ? `${dotSize} shrink-0 cursor-pointer rounded-full border-2 border-[#0077c8] bg-white p-0 ring-2 ring-[#0077c8]/30`
            : completed
              ? `${dotSize} shrink-0 cursor-pointer rounded-full border-0 bg-[#0077c8] p-0`
              : `${dotSize} shrink-0 cursor-pointer rounded-full border-0 bg-[#d2d8e0] p-0 transition-colors hover:bg-[#0077c8]`

          const labelClass = `text-[10px] mt-1 text-center max-w-[60px] leading-tight truncate ${
            isCurrent
              ? 'font-medium text-[#0077c8]'
              : completed
                ? 'text-[#0077c8]'
                : 'text-[#b0b7bf]'
          }`

          return (
            <div key={`step-${index}`} className="flex min-w-0 flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {leftLine}
                <div className="relative shrink-0">
                  <button
                    type="button"
                    aria-current={isCurrent ? 'step' : undefined}
                    onClick={() => onStepClick(index)}
                    className={dotClass}
                  />
                  {queriesByStep[index] > 0 ? (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-6px',
                        right: '-6px',
                        background: '#ef4444',
                        color: 'white',
                        borderRadius: '999px',
                        fontSize: '8px',
                        minWidth: '14px',
                        height: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 2px',
                        border: '2px solid white',
                      }}
                    >
                      {queriesByStep[index]}
                    </span>
                  ) : null}
                </div>
                {rightLine}
              </div>
              <span className={labelClass}>{step.label}</span>
            </div>
          )
        })}
      </div>

      <p className="mt-1 text-center text-sm">
        {businessName ? (
          <>
            <span className="font-medium text-[#6a7380]">{businessName}</span>
            <span className="mx-1 font-medium text-[#6a7380]">·</span>
          </>
        ) : null}
        <span className="font-medium text-[#1f2328]">
          Step {currentStep + 1} of {steps.length} — {currentLabel}
        </span>
      </p>
    </div>
  )
}

export default WorkflowProgressBar
