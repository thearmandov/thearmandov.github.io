module.exports = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "" : undefined,
    eperimental: {
      appDir: true
    },
    images: {
      unoptimized: true,
    },
    reactStrictMode: true
}