module.exports = {
  distDir: 'build',
  future: {
    webpack5: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.modules = ['./src', './vendor', ...config.resolve.modules]

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { ref: true, svgo: true }}],
    })

    return config
  },
}
