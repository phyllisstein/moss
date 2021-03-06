module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV || 'development')
  const IS_PRODUCTION = api.env('production')
  const IS_WEBPACK = api.caller(c => /loader/.test(c))

  const plugins = [
    [
      'ramda',
      {
        useES: IS_WEBPACK,
      },
    ],
    [
      'styled-components',
      {
        displayName: true,
        minify: false,
        process: false,
        pure: true,
        ssr: true,
        transpileTemplateLiterals: true,
      },
    ],
  ]

  const presets = [
    [
      '@babel/env',
      {
        bugfixes: true,
        corejs: {
          proposals: true,
          version: 3,
        },
        targets: '> 5% and not dead and not ie 11',
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/react',
      {
        development: !IS_PRODUCTION,
        runtime: 'automatic',
      },
    ],
    [
      '@babel/typescript',
      {
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
