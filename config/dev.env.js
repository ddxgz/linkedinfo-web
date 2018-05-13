// var merge = require('webpack-merge')
// var prodEnv = require('./prod.env')

// module.exports = merge(prodEnv, {
module.exports = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"http://pcx.localhost:8000"'
  // BASE_API: '"http://admin.localhost:8000"'
}
