const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: []
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.join(__dirname, 'pages'),
      '@styles': path.join(__dirname, 'styles/main.css')
    }

    return config
  }
}
