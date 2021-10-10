const path = require('path')

module.exports = {
  distDir: 'build',
  target: 'serverless',
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { ref: true, svgo: true }}],
    })

    config.resolve.alias['~'] = path.resolve(__dirname, 'src')

    return config
  },
  webpack5: true,
}
