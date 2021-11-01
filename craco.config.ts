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
