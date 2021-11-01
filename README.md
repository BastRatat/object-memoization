# React performance assessment & optimisation

***By Bastien Ratat***

**Technologies: `Why did you render`, `React.memo HOC` & `TypeScript`**

### Install [wdyr](https://github.com/welldone-software/why-did-you-render) and [craco](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md)
1. `yarn add --dev @welldone-software/why-did-you-render` 
2. `yarn add @craco/craco` 
3. Update `package.json`:
```json
"scripts": {
  "start": "craco start",
  "build": "craco build"
  "test": "craco test"
}
```
4. Add a `craco.config.ts` to project root:
```typescript
module.exports = {
  babel: {
    loaderOptions: (babelLoaderOptions: any) => {
      const origBabelPresetCRAIndex = babelLoaderOptions.presets.findIndex(
        (preset: any) => {
          return preset[0].includes('babel-preset-react-app')
        },
      )

      const origBabelPresetCRA =
        babelLoaderOptions.presets[origBabelPresetCRAIndex]

      babelLoaderOptions.presets[origBabelPresetCRAIndex] =
        function overridenPresetCRA(api: any, opts: any, env: any) {
          const babelPresetCRAResult = require(origBabelPresetCRA[0])(
            api,
            origBabelPresetCRA[1],
            env,
          )

          babelPresetCRAResult.presets.forEach((preset: any) => {
            const isReactPreset =
              preset &&
              preset[1] &&
              preset[1].runtime === 'automatic' &&
              preset[1].development === true
            if (isReactPreset) {
              preset[1].importSource = '@welldone-software/why-did-you-render'
            }
          })

          return babelPresetCRAResult
        }

      return babelLoaderOptions
    },
  },
}

```
5. Add a `wdyr.ts` in `src`:
```typescript
// <reference types="@welldone-software/why-did-you-render" />
import React from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
  })
}
```
6. Import `wdyr.ts` as the first import statement in `index.ts`
```typescript
import './wdyr'
```
7. Tracking components
```typescript
class ClassComponent extends React.Component {
  static whyDidYouRender = true
  render(){
    return (
      ...
    )
  }
}

const FunctionalComponent = props => (
  <>
    ...
  </>
)

FunctionalComponent.whyDidYouRender = true
```


### Preview

***Memoization***
https://user-images.githubusercontent.com/32437299/139672983-b6bb488a-54ae-48e4-b817-881c817b88d3.mov

***Tracking component tool***
https://user-images.githubusercontent.com/32437299/139675716-52805d31-571b-4ec6-ae50-5de71977900b.mov



