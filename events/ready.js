
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require(".data/../ayarlar.json");
//space
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${//space
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  var oyun = [
    "yt.com/spacecodes | <3"
  ];
//space
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};//space
