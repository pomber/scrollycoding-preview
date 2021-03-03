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

const classes = {
  "ch-hike-step-content-unfocused": 'opacity-25 transition-opacity',
  'ch-hike-step-content': 'border-none',
  'ch-frame-button': 'bg-gray-300 border-gray-600',
}

function Hike({ children, previewProps, codeProps, ...props }) {
  const steps = useMdxSteps(children, {
    ...previewProps,
    preset: {
      customSetup: {
        dependencies: {
          "react-svg-curve": "0.2.0"
        }
      }
    }
  }, {
    ...codeProps,
    minColumns: 40,
  })
  return <HikeSteps steps={steps} {...props} classes={classes} />
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