// index.js
const { createClient } = require("bedrock-protocol");
const express = require("express");

// server kecil untuk HTTP ping (agar Render & UptimeRobot bisa akses)
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Bot Bedrock sedang berjalan di Render!");
});

app.listen(port, () => {
  console.log(`🌐 HTTP server aktif di port ${port}`);
});

// bot Minecraft Bedrock
const client = createClient({
  host: "devoth.aternos.me",
  port: 50674,
  username: "BotDevoth", // ganti nama kalau bentrok dengan player asli
  offline: true
});

client.on("join", () => {
  console.log("✅ Bot berhasil join ke server!");
});

client.on("disconnect", (packet) => {
  console.log("❌ Bot terputus:", packet);
});

client.on("error", (err) => {
  console.log("⚠️ Error:", err.message);
});
