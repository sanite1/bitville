

const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = (app) => {
    app.use("/api", createProxyMiddleware({
        target: "https://bitvilletech-production.up.railway.app",
        changeOrigin: true
    }))
}