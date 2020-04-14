import { useState, useRef, useEffect } from 'react'

function useHover(cb) {
  const [state, setState] = useState(false)
  const ref = useRef()

  function handleMouseOver() {
    setState(true)
    if (typeof cb === 'function') {
      cb(state)
    }
  }

  function handleMouseOut() {
    setState(false)
    if (typeof cb === 'function') {
      cb(state)
    }
  }

  useEffect(() => {
    const node = ref.current
    node.addEventListener('mouseover', handleMouseOver)
    node.addEventListener('mouseout', handleMouseOut)

    return () => {
      node.removeEventListener('mouseout', handleMouseOver)
      node.removeEventListener('mouseover', handleMouseOut)
    }
  })

  return [ref, state]
}

export default useHover
