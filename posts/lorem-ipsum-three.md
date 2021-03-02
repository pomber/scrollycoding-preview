---
title: 'Lorem Ipsum Three'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-03-02T05:35:07.322Z'
author:
  name: Rodrigo Pombo
  picture: '/assets/blog/authors/pomber.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

<Hike>

<StepHead>

```jsx
import { BasisCurve } from 'react-svg-curve'

const points = [
  [10, 90],
  [70, 10],
  [130, 80],
  [190, 20],
]

export default function App() {
  return (
    <svg
      width="360"
      height="180"
      viewBox="0 0 200 100"
    >
      <BasisCurve data={points} />
    </svg>
  )
}
```

```jsx Foo.js
export function Foo() {
  return 'Hello Foo'
}
```

</StepHead>

### Step 1

Lorem ipsum dolor sit amet, consectetur adipiscing [something about `points`](focus://3:8), sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [Praesent](focus://10[16:30]) elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.

<CodeSlot style={{height: 400}}/>
<PreviewSlot zoom={0.8}/>

Venenatis [cras sed felis](focus://Foo.js#1:3) eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae.

Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

<StepHead focus="20">

```jsx
import {
  BasisCurve,
  NaturalCurve,
} from 'react-svg-curve'

const points = [
  [10, 90],
  [70, 10],
  [130, 80],
  [190, 20],
]

export default function App() {
  return (
    <svg
      width="360"
      height="180"
      viewBox="0 0 200 100"
    >
      <NaturalCurve data={points} />
    </svg>
  )
}
```

</StepHead>

### Step 2

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae.

<CodeSlot />

Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

<StepHead focus="17:22">

```jsx
import { NaturalCurve } from 'react-svg-curve'

const points = [
  [10, 90],
  [70, 10],
  [130, 80],
  [190, 20],
]

export default function App() {
  return (
    <svg
      width="360"
      height="180"
      viewBox="0 0 200 100"
    >
      <NaturalCurve
        data={points}
        showPoints={false}
        strokeWidth={10}
        strokeDasharray="6"
      />
    </svg>
  )
}
```

</StepHead>

### Step 3

<PreviewSlot style={{height: 250}}/>

Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

</Hike>

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
