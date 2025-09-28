// keep_alive.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is running on Replit 🚀');
});

app.listen(3000, () => {
  console.log('🌍 Keep-alive server aktif di port 3000');
});
