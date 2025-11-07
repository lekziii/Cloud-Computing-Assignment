import express from 'express';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from dist directory
app.use(express.static('dist'));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});