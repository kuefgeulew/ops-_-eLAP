import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'elap_workflow_progress'

function readFull() {
  try {
    if (typeof localStorage === 'undefined') return {}
    let raw
    try {
      raw = localStorage.getItem(STORAGE_KEY)
    } catch {
      return {}
    }
    if (!raw) return {}
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch {
      return {}
    }
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
  } catch {
    return {}
  }
}

function writeFull(obj) {
  try {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
  } catch {
    // ignore quota / private mode / denied access
  }
}

function normalizeEntry(raw, product) {
  return {
    product: raw.product ?? product,
    currentStep: typeof raw.currentStep === 'number' ? raw.currentStep : 0,
    completedSteps: Array.isArray(raw.completedSteps) ? raw.completedSteps : [],
    lastVisited:
      typeof raw.lastVisited === 'string' ? raw.lastVisited : new Date().toISOString(),
  }
}

function mergeAndSave(trackingId, updater) {
  const full = readFull()
  const prev = full[trackingId] ? { ...full[trackingId] } : {}
  const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater }
  full[trackingId] = next
  writeFull(full)
  return next
}

function useWorkflowProgress(trackingId, product, stepIndex) {
  const [entry, setEntry] = useState(() => {
    try {
      const full = readFull()
      const existing = full[trackingId]
      if (existing && existing.product === product) {
        return normalizeEntry(existing, product)
      }
    } catch {
      // fall through to default
    }
    return {
      product,
      currentStep: 0,
      completedSteps: [],
      lastVisited: new Date().toISOString(),
    }
  })

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const full = readFull()
        const existing = full[trackingId]
        if (existing && existing.product === product) {
          setEntry(normalizeEntry(existing, product))
          return
        }
        const initial = {
          product,
          currentStep: 0,
          completedSteps: [],
          lastVisited: new Date().toISOString(),
        }
        full[trackingId] = initial
        writeFull(full)
        setEntry(initial)
      } catch {
        setEntry({
          product,
          currentStep: 0,
          completedSteps: [],
          lastVisited: new Date().toISOString(),
        })
      }
    })
  }, [trackingId, product])

  const goToStep = useCallback(
    (index) => {
      try {
        const next = mergeAndSave(trackingId, (stored) => ({
          ...stored,
          product: stored.product ?? product,
          currentStep: index,
          lastVisited: new Date().toISOString(),
        }))
        setEntry(next)
      } catch {
        setEntry((prev) => ({
          ...prev,
          product: prev.product ?? product,
          currentStep: index,
          lastVisited: new Date().toISOString(),
        }))
      }
    },
    [trackingId, product],
  )

  useEffect(() => {
    if (!Number.isFinite(stepIndex) || stepIndex < 0) return
    if (stepIndex !== entry.currentStep) {
      queueMicrotask(() => {
        goToStep(stepIndex)
      })
    }
  }, [stepIndex, entry.currentStep, goToStep])

  const advance = useCallback(
    (totalSteps) => {
      try {
        const next = mergeAndSave(trackingId, (stored) => {
          const cur = typeof stored.currentStep === 'number' ? stored.currentStep : 0
          const completed = Array.isArray(stored.completedSteps) ? [...stored.completedSteps] : []
          if (!completed.includes(cur)) completed.push(cur)
          completed.sort((a, b) => a - b)
          const lastIndex = Math.max(0, totalSteps - 1)
          const nextStep = cur < lastIndex ? cur + 1 : cur
          return {
            ...stored,
            product: stored.product ?? product,
            currentStep: nextStep,
            completedSteps: completed,
            lastVisited: new Date().toISOString(),
          }
        })
        setEntry(next)
      } catch {
        setEntry((prev) => {
          const cur = typeof prev.currentStep === 'number' ? prev.currentStep : 0
          const completed = Array.isArray(prev.completedSteps) ? [...prev.completedSteps] : []
          if (!completed.includes(cur)) completed.push(cur)
          completed.sort((a, b) => a - b)
          const lastIndex = Math.max(0, totalSteps - 1)
          const nextStep = cur < lastIndex ? cur + 1 : cur
          return {
            ...prev,
            product: prev.product ?? product,
            currentStep: nextStep,
            completedSteps: completed,
            lastVisited: new Date().toISOString(),
          }
        })
      }
    },
    [trackingId, product],
  )

  const isStepCompleted = useCallback(
    (index) => entry.completedSteps.includes(index),
    [entry.completedSteps],
  )

  const resetProgress = useCallback(() => {
    try {
      const full = readFull()
      delete full[trackingId]
      writeFull(full)
    } catch {
      // ignore read/write failures
    }
    const fresh = {
      product,
      currentStep: 0,
      completedSteps: [],
      lastVisited: new Date().toISOString(),
    }
    setEntry(fresh)
  }, [trackingId, product])

  return {
    currentStep: entry.currentStep,
    completedSteps: entry.completedSteps,
    goToStep,
    advance,
    isStepCompleted,
    resetProgress,
  }
}

export default useWorkflowProgress
