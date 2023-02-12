import createProxyMiddleware from "http-proxy-middleware";


export const app = ()=> {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:8000',
        changeOrigin: true,
      })
    );
  };