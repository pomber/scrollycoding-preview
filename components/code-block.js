import Prism from 'prismjs'
import React from 'react'
import 'prismjs/components/prism-jsx.min'

const useLayoutEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect

export default function CodeBlock(props) {
  const ref = React.useRef()
  useLayoutEffect(() => {
    Prism.highlightAllUnder(ref.current)
  }, [])
  return <pre ref={ref} {...props} className="rounded-lg" />
}
