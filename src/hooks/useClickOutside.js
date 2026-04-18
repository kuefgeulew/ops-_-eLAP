import { useEffect } from 'react'

/**
 * On document mousedown, calls `onOutside` when the event target is outside each ref.
 */
function useClickOutside(refHandlers) {
  useEffect(() => {
    function handleClickOutside(event) {
      refHandlers.forEach(({ ref, onOutside }) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onOutside()
        }
      })
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [refHandlers])
}

export default useClickOutside

