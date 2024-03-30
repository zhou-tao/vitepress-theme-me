// see https://waline.js.org/guide/deploy/netlify.html
process.env.DETA_RUNTIME = 'true'

const http = require('http')
const Waline = require('@waline/vercel')
const serverless = require('serverless-http')

const app = Waline({
  async postSave(comment) {
    console.log('success', comment)
  }
})

module.exports.handler = serverless(http.createServer(app))
