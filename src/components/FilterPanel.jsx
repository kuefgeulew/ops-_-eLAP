/**
 * Left-hand filter form: dates, status, territory, assign user, and apply/reset.
 */
import { useMemo, useRef, useState } from 'react'
import {
  appTypeOptions,
  assignUserOptions,
  datePresetOptions,
  selfAssignUser,
  statusOptions,
  territoryOptions,
} from '../data/filterOptions'
import { DATE_UI, UI_TEXT } from '../config/uiConstants'
import {
  formatDateForInput,
  getMonthGrid,
  getPresetRange,
  normalizeDate,
  sameDate,
} from '../hooks/useDateRangeUtils'
import useClickOutside from '../hooks/useClickOutside'

function FilterPanel({ onSubmitCriteria, onResetCriteria, onAssignUser }) {
  const [businessNameInput, setBusinessNameInput] = useState('')
  const [trackingIdInput, setTrackingIdInput] = useState('')
  const [selectedTerritory, setSelectedTerritory] = useState(UI_TEXT.selectTerritory)
  const [selectedStatus, setSelectedStatus] = useState(UI_TEXT.selectApplicationStatus)
  const [selectedAppType, setSelectedAppType] = useState(UI_TEXT.allApplications)
  const [selectedApprovalDate, setSelectedApprovalDate] = useState(UI_TEXT.approvalDate)
  const [approvalRange, setApprovalRange] = useState(DATE_UI.defaultRange)
  const [draftRange, setDraftRange] = useState(DATE_UI.defaultRange)
  const [leftMonth, setLeftMonth] = useState(new Date(2026, 1, 1))

  const [isTerritoryOpen, setIsTerritoryOpen] = useState(false)
  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const [isAppTypeOpen, setIsAppTypeOpen] = useState(false)
  const [isApprovalDateOpen, setIsApprovalDateOpen] = useState(false)
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false)
  const [territorySearch, setTerritorySearch] = useState('')
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false)
  const [isAssignUserOpen, setIsAssignUserOpen] = useState(false)
  const [assignUserSearch, setAssignUserSearch] = useState('')
  const [assignUser, setAssignUser] = useState(UI_TEXT.selectUser)
  const [assignRemark, setAssignRemark] = useState('')
  const [showAssignSuccess, setShowAssignSuccess] = useState(false)
  const [isSelfAssign, setIsSelfAssign] = useState(false)

  const territoryRef = useRef(null)
  const statusRef = useRef(null)
  const appTypeRef = useRef(null)
  const approvalDateRef = useRef(null)
  const rangeRef = useRef(null)
  const assignUserRef = useRef(null)

  useClickOutside(
    useMemo(
      () => [
        { ref: territoryRef, onOutside: () => setIsTerritoryOpen(false) },
        { ref: statusRef, onOutside: () => setIsStatusOpen(false) },
        { ref: appTypeRef, onOutside: () => setIsAppTypeOpen(false) },
        { ref: approvalDateRef, onOutside: () => setIsApprovalDateOpen(false) },
        { ref: rangeRef, onOutside: () => setIsDateRangeOpen(false) },
        { ref: assignUserRef, onOutside: () => setIsAssignUserOpen(false) },
      ],
      [],
    ),
  )

  const dateRangeLabel = `${formatDateForInput(approvalRange.start)} - ${formatDateForInput(approvalRange.end)}`
  const rightMonth = new Date(leftMonth.getFullYear(), leftMonth.getMonth() + 1, 1)
  const filteredTerritoryOptions = territoryOptions.filter((item) =>
    item.toLowerCase().includes(territorySearch.toLowerCase()),
  )
  const filteredAssignUsers = assignUserOptions.filter((item) =>
    item.toLowerCase().includes(assignUserSearch.toLowerCase()),
  )

  function handleSubmit() {
    onSubmitCriteria?.({
      businessName: businessNameInput.trim(),
      trackingId: trackingIdInput.trim(),
      assignTo: selectedTerritory,
      unit: selectedTerritory,
      approvalDateActive: selectedApprovalDate !== UI_TEXT.approvalDate,
      approvalRange: { ...approvalRange },
      lastDisburseActive: false,
      lastDisburseRange: null,
    })
  }

  function handleReset() {
    setBusinessNameInput('')
    setTrackingIdInput('')
    setSelectedTerritory(UI_TEXT.selectTerritory)
    setSelectedStatus(UI_TEXT.selectApplicationStatus)
    setSelectedAppType(UI_TEXT.allApplications)
    setSelectedApprovalDate(UI_TEXT.approvalDate)
    setApprovalRange(DATE_UI.defaultRange)
    setDraftRange(DATE_UI.defaultRange)
    onResetCriteria?.()
  }

  function openAssignModal() {
    setIsAssignModalOpen(true)
    setShowAssignSuccess(false)
    setAssignUser(UI_TEXT.selectUser)
    setAssignRemark('')
    setAssignUserSearch('')
    setIsSelfAssign(false)
    setIsAssignUserOpen(false)
  }

  function closeAssignModal() {
    setIsAssignModalOpen(false)
    setIsAssignUserOpen(false)
    setShowAssignSuccess(false)
  }

  function renderCalendarMonth(monthDate, monthCells) {
    return (
      <div className="w-[300px]">
        <div className="mb-2 text-center text-[14px] font-semibold text-[#111820]">
          {DATE_UI.monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
        </div>
        <div className="grid grid-cols-7 text-center text-[14px] font-semibold text-[#111820]">
          {DATE_UI.weekDays.map((day) => (
            <div key={day} className="py-0.5">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {monthCells.map(({ date, inCurrentMonth }) => {
            const start = draftRange.start
            const end = draftRange.end || draftRange.start
            const ts = normalizeDate(date).getTime()
            const inRange = ts >= normalizeDate(start).getTime() && ts <= normalizeDate(end).getTime()
            const isStart = sameDate(date, start)
            return (
              <button
                key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
                type="button"
                onClick={() => {
                  const clicked = normalizeDate(date)
                  setDraftRange((prev) => {
                    if (!prev.start || prev.end) return { start: clicked, end: null }
                    if (clicked.getTime() < prev.start.getTime()) return { start: clicked, end: prev.start }
                    return { start: prev.start, end: clicked }
                  })
                }}
                className={`h-8 text-center text-[14px] ${inCurrentMonth ? 'text-[#111820]' : 'text-[#9fa7b0]'} ${inRange ? 'bg-[#eef8fd]' : 'bg-white'} ${isStart ? 'bg-[#1c86d9] text-white' : ''}`}
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <section className="border border-[#edf1f4] bg-white p-3">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_92px_92px] gap-3">
        <input value={businessNameInput} onChange={(e) => setBusinessNameInput(e.target.value)} placeholder="Business Name" className="h-[36px] border border-[#e3e8ef] px-3 text-[14px] text-[#7a8088] outline-none" />
        <input value={trackingIdInput} onChange={(e) => setTrackingIdInput(e.target.value)} placeholder="Tracking ID" className="h-[36px] border border-[#e3e8ef] px-3 text-[14px] text-[#7a8088] outline-none" />

        <div className="relative" ref={approvalDateRef}>
          <button type="button" onClick={() => setIsApprovalDateOpen((v) => !v)} className="flex h-[36px] w-full items-center border border-[#e3e8ef] bg-white px-3 text-[14px] text-[#535f6d]">{selectedApprovalDate}</button>
          {isApprovalDateOpen && (
            <div className="absolute left-0 top-[36px] z-30 w-full border border-[#d9d9d9] bg-white shadow-[0_1px_5px_rgba(0,0,0,0.2)]">
              {datePresetOptions.map((option, index) => (
                <button key={option} type="button" onClick={() => {
                  if (option === 'Custom Range') setIsDateRangeOpen(true)
                  else {
                    const preset = getPresetRange(option)
                    if (preset) setApprovalRange(preset)
                    setSelectedApprovalDate(option)
                    setIsApprovalDateOpen(false)
                  }
                }} className={`flex h-[34px] w-full items-center px-4 text-left text-[13px] ${index === 0 ? 'bg-[#008fdd] text-white' : 'hover:bg-[#f8fafc]'}`}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative" ref={rangeRef}>
          <button type="button" onClick={() => setIsDateRangeOpen(true)} className="flex h-[36px] w-full items-center border border-[#e3e8ef] bg-white px-3 text-left text-[14px] text-[#202020]">{dateRangeLabel}</button>
          {isDateRangeOpen && (
            <div className="absolute right-0 top-[40px] z-40 w-[790px] border border-[#d9d9d9] bg-white shadow-[0_1px_5px_rgba(0,0,0,0.2)]">
              <div className="grid grid-cols-[130px_1fr]">
                <div className="border-r border-[#e7edf2] py-1">
                  {datePresetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        if (option === 'Custom Range') return
                        const preset = getPresetRange(option)
                        if (preset) setDraftRange(preset)
                      }}
                      className={`flex h-[39px] w-full items-center px-4 text-left text-[14px] ${option === 'Custom Range' ? 'bg-[#008fdd] text-white' : 'text-[#111820] hover:bg-[#f8fafc]'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div>
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <button type="button" className="text-[34px] leading-none text-[#111820]" onClick={() => setLeftMonth((p) => new Date(p.getFullYear(), p.getMonth() - 1, 1))}>‹</button>
                    <div className="flex w-full justify-around">
                      <span className="text-[14px] font-semibold text-[#111820]">{DATE_UI.monthNames[leftMonth.getMonth()]} {leftMonth.getFullYear()}</span>
                      <span className="text-[14px] font-semibold text-[#111820]">{DATE_UI.monthNames[rightMonth.getMonth()]} {rightMonth.getFullYear()}</span>
                    </div>
                    <button type="button" className="text-[34px] leading-none text-[#111820]" onClick={() => setLeftMonth((p) => new Date(p.getFullYear(), p.getMonth() + 1, 1))}>›</button>
                  </div>
                  <div className="flex gap-3 px-3 pb-3">{renderCalendarMonth(leftMonth, getMonthGrid(leftMonth))}{renderCalendarMonth(rightMonth, getMonthGrid(rightMonth))}</div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 border-t border-[#e7edf2] px-3 py-2">
                <span className="mr-auto text-[14px] text-[#1a2530]">{formatDateForInput(draftRange.start)} - {formatDateForInput(draftRange.end || draftRange.start)}</span>
                <button type="button" onClick={() => setIsDateRangeOpen(false)} className="h-[34px] border border-[#d6dde6] bg-[#f3f3f3] px-4 text-[14px] font-semibold text-[#121a22]">CANCEL</button>
                <button type="button" onClick={() => {
                  setApprovalRange({ start: draftRange.start, end: draftRange.end || draftRange.start })
                  setSelectedApprovalDate('Custom Range')
                  setIsDateRangeOpen(false)
                }} className="h-[34px] bg-[#008fdd] px-4 text-[14px] font-semibold text-white">APPLY</button>
              </div>
            </div>
          )}
        </div>

        <button type="button" onClick={handleSubmit} className="h-[36px] bg-[#007cbf] text-[14px] font-semibold text-white">Submit</button>
        <button type="button" onClick={handleReset} className="h-[36px] border border-[#d7dce3] bg-white text-[14px] font-medium text-[#4f5560]">Reset</button>

        <div className="relative" ref={territoryRef}>
          <button
            type="button"
            onClick={() => setIsTerritoryOpen((v) => !v)}
            className="flex h-[36px] w-full items-center justify-between border border-[#e3e8ef] bg-white px-3 text-[14px]"
          >
            <span className={selectedTerritory === UI_TEXT.selectTerritory ? 'text-[#8f98a2]' : ''}>
              {selectedTerritory}
            </span>
            <span className="text-[10px] text-[#9aa2ab]">▲</span>
          </button>
          {isTerritoryOpen && (
            <div className="absolute left-0 top-[36px] z-20 w-[360px] border border-[#d9d9d9] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.18)]">
              <div className="p-1.5">
                <div className="flex h-[32px] items-center border border-[#8e97a1] bg-white px-2">
                  <input
                    value={territorySearch}
                    onChange={(e) => setTerritorySearch(e.target.value)}
                    className="h-full flex-1 text-[13px] outline-none"
                  />
                  <span className="text-[18px] text-[#99a1a9]">⌕</span>
                </div>
              </div>
              <div className="max-h-[290px] overflow-y-auto border-t border-[#eceff3]">
                {filteredTerritoryOptions.map((o, i) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => {
                      setSelectedTerritory(o)
                      setIsTerritoryOpen(false)
                    }}
                    className={`flex h-[42px] w-full items-center px-4 text-left text-[14px] ${
                      i === 0 ? 'bg-[#0b6ddf] text-white' : 'hover:bg-[#f8fafc]'
                    }`}
                  >
                    <span className={i === 0 ? 'text-white' : 'text-[#2a323b]'}>{o}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={statusRef}>
          <button type="button" onClick={() => setIsStatusOpen((v) => !v)} className="flex h-[36px] w-full items-center justify-between border border-[#e3e8ef] bg-white px-3 text-[14px]"><span>{selectedStatus}</span><span className="text-[10px] text-[#9aa2ab]">▼</span></button>
          {isStatusOpen && <div className="absolute left-0 top-[36px] z-20 w-[360px] border border-[#d9d9d9] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.18)]">{statusOptions.map((o, i) => <button key={o} type="button" onClick={() => { setSelectedStatus(o); setIsStatusOpen(false) }} className={`flex h-[40px] w-full items-center px-4 text-left text-[13px] ${i === 0 ? 'bg-[#0b6ddf] text-white font-semibold' : 'text-[#10151b] hover:bg-[#f8fafc]'}`}>{o}</button>)}</div>}
        </div>

        <div className="relative" ref={appTypeRef}>
          <button type="button" onClick={() => setIsAppTypeOpen((v) => !v)} className="flex h-[36px] w-full items-center justify-between border border-[#e3e8ef] bg-white px-3 text-[14px]"><span>{selectedAppType}</span><span className="text-[10px] text-[#9aa2ab]">▼</span></button>
          {isAppTypeOpen && <div className="absolute left-0 top-[36px] z-20 w-full border border-[#d9d9d9] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.18)]">{appTypeOptions.map((o) => <button key={o} type="button" onClick={() => { setSelectedAppType(o); setIsAppTypeOpen(false) }} className={`flex h-[40px] w-full items-center px-4 text-left text-[13px] ${selectedAppType === o ? 'bg-[#0b6ddf] text-white font-semibold' : 'text-[#10151b] hover:bg-[#f8fafc]'}`}>{o}</button>)}</div>}
        </div>

        <button
          type="button"
          onClick={openAssignModal}
          className="h-[36px] bg-[#007cbf] text-[14px] font-semibold text-white"
        >
          Assign application
        </button>
      </div>

      {isAssignModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/35 pt-8">
          <div className="relative w-[960px] rounded-[8px] border border-[#cfd5dc] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.22)]">
            <div className="flex items-center justify-between border-b border-[#e7ebf0] px-6 py-4">
              <h3 className="text-[14px] font-semibold text-[#111820]">Assign Application</h3>
              <button
                type="button"
                onClick={closeAssignModal}
                className="text-[42px] font-light leading-none text-[#7e8791]"
              >
                ×
              </button>
            </div>

            {!showAssignSuccess ? (
              <>
                <div className="px-6 py-6">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-[14px] font-medium text-[#111820]">Self Assign</span>
                    <button
                      type="button"
                      onClick={() => setIsSelfAssign((prev) => !prev)}
                      aria-pressed={isSelfAssign}
                      className={`relative inline-flex h-[24px] w-[46px] items-center rounded-full border transition-colors duration-200 ${
                        isSelfAssign
                          ? 'border-[#007cbf] bg-[#007cbf]'
                          : 'border-[#c8d0da] bg-[#d8dee7]'
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-[2px] h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-transform duration-200 ${
                          isSelfAssign ? 'translate-x-[24px]' : 'translate-x-[2px]'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="mb-2 text-[14px] text-[#111820]">
                    Select User <span className="text-red-500">*</span>
                  </div>
                  <div className="relative mb-5" ref={assignUserRef}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!isSelfAssign) setIsAssignUserOpen((v) => !v)
                      }}
                      className={`flex h-[40px] w-full items-center justify-between rounded-[6px] px-4 text-left text-[14px] text-[#2b323b] ${
                        isSelfAssign ? 'cursor-not-allowed bg-[#eceff3] text-[#8e96a0]' : 'bg-[#f7f7f7]'
                      }`}
                    >
                      <span>{isSelfAssign ? selfAssignUser : assignUser}</span>
                      <span className="text-[11px] text-[#9aa2ab]">▲</span>
                    </button>
                    {isAssignUserOpen && !isSelfAssign && (
                      <div className="absolute left-0 top-[42px] z-20 w-full rounded-[6px] border border-[#d0d6dd] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.18)]">
                        <div className="p-2">
                          <div className="flex h-[34px] items-center border border-[#8e97a1] bg-white px-2">
                            <input
                              value={assignUserSearch}
                              onChange={(e) => setAssignUserSearch(e.target.value)}
                              className="h-full flex-1 text-[13px] outline-none"
                            />
                            <span className="text-[18px] text-[#99a1a9]">⌕</span>
                          </div>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto border-t border-[#eceff3]">
                          {filteredAssignUsers.map((user, i) => (
                            <button
                              key={user}
                              type="button"
                              onClick={() => {
                                setAssignUser(user)
                                setIsAssignUserOpen(false)
                              }}
                              className={`flex h-[42px] w-full items-center px-4 text-left text-[14px] ${
                                i === 0 ? 'bg-[#0b6ddf] text-white' : 'text-[#2a323b] hover:bg-[#f8fafc]'
                              }`}
                            >
                              {user}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-2 text-[14px] text-[#111820]">Remark</div>
                  <textarea
                    value={assignRemark}
                    onChange={(e) => setAssignRemark(e.target.value)}
                    className="h-[86px] w-full resize-none border border-[#d7dde5] p-2 text-[14px] outline-none"
                  />
                </div>

                <div className="flex justify-end border-t border-[#e7ebf0] px-6 py-4">
                  <button
                    type="button"
                    onClick={() => {
                      const selectedAssignee = isSelfAssign ? selfAssignUser : assignUser
                      if (!selectedAssignee || selectedAssignee === UI_TEXT.selectUser) return
                      onAssignUser?.(selectedAssignee)
                      setShowAssignSuccess(true)
                    }}
                    className="h-[48px] min-w-[190px] bg-[#007cbf] px-8"
                  >
                    <span className="text-[14px] font-semibold text-white">Submit</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="px-10 pb-7 pt-8">
                <div className="mx-auto mb-4 flex h-[104px] w-[104px] items-center justify-center rounded-full border-[6px] border-[#edf8e5] text-[52px] text-[#a8e58d]">
                  ✓
                </div>
                <div className="mb-3 text-center text-[14px] font-semibold text-[#5a626c]">Success</div>
                <div className="mb-10 text-center text-[14px] text-[#727b86]">
                  Application is assigned to user successfully.
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeAssignModal}
                    className="h-[48px] min-w-[84px] rounded-[8px] bg-[#007cbf] px-6 text-[14px] font-semibold text-white"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default FilterPanel
