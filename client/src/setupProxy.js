

const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = (app) => {
    app.use("/api", createProxyMiddleware({
        target: "https://bitville.onrender.com",
        changeOrigin: true
    }))
}