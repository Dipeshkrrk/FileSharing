import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();

app.use('/upload', createProxyMiddleware({
  target: 'https://file-sharing-flame-eta.vercel.app',
  changeOrigin: true,
  pathRewrite: {
    '^/upload': '/upload'
  }
}));

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
