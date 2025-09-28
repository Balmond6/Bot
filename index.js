// index.js
const { createClient } = require('bedrock-protocol');
const keep_alive = require('./keep_alive');

// Konfigurasi bot
const client = createClient({
  host: 'devoth.aternos.me',  // ganti dengan alamat server
  port: 50674,                // port server
  username: 'BotDevoth',      // ganti nama kalau bentrok
  offline: true               // Aternos default offline mode
});

client.on('join', () => {
  console.log('✅ Bot berhasil join ke server!');
});

client.on('disconnect', (packet) => {
  console.log('❌ Bot terputus:', packet);
});

client.on('error', (err) => {
  console.log('⚠️ Error:', err.message);
});
