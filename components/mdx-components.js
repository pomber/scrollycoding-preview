import CodeBlock from './code-block'
import CustomLink from './custom-link'
import {
  Hike as HikeSteps,
  Focus,
  CodeSlot,
  PreviewSlot,
  useMdxSteps,
  StepHead,
  withFocusHandler,
} from '@code-hike/scrollycoding'

function Hike({ children, previewProps, codeProps, ...props }) {
  const steps = useMdxSteps(children, previewProps, {
    ...codeProps,
    minColumns: 40,
  })
  return <HikeSteps steps={steps} {...props} />
}

export const components = {
  pre: CodeBlock,
  // Code Hike:
  a: withFocusHandler(CustomLink),
  Hike,
  Focus,
  StepHead,
  CodeSlot,
  PreviewSlot,
}
