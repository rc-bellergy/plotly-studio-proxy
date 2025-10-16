const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// The target Dash app
const target = 'https://ioter-vibration-monitoring.plotly.app';

// Create a proxy for all routes
app.use('/', createProxyMiddleware({
  target: target,
  changeOrigin: true, // This is important for virtual hosted sites
  ws: true, // Enable WebSocket proxying for Dash interactivity
}));

app.listen(3000, () => {
  console.log(`Proxy server running on port 3000, proxying to ${target}`);
});
