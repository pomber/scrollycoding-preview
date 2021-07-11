import CodeBlock from './code-block'
import CustomLink from './custom-link'
import {
  Hike as HikeSteps,
  Focus,
  CodeSlot,
  PreviewSlot,
  StepHead,
  withFocusHandler,
} from '@code-hike/scrollycoding'

const classes = {
  'ch-hike-step-content-unfocused': 'opacity-25 transition-opacity',
  'ch-hike-step-content': 'border-none',
  'ch-frame-button': 'bg-gray-300 border-gray-600',
}

const preset = {
  template: 'react',
  customSetup: {
    dependencies: {
      'react-svg-curve': '0.2.0',
    },
  },
}

function Hike(props) {
  const editorProps = {
    codeProps: { minColumns: 40 },
    ...props.editorProps,
  }

  return (
    <HikeSteps
      classes={classes}
      preset={preset}
      {...props}
      editorProps={editorProps}
    />
  )
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
