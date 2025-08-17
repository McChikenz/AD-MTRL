const express = require('express');
const path = require('path');
const app = express();

// Serve static files with long cache lifetime
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y', // 1 year
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
