const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.avatarURL + ' Dönen Renkler!')
.addField('**Oyuncu Komutları İçin Özel Mesajlarda Kullanılamaz!**')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
const sunucubilgi = new Discord.RichEmbed()
.setColor(0xff0000)
.setTimestamp()
.setDescription('')
.setImage(`https://img.webme.com/pic/k/kinghaninyeri/donenrenkler.gif`)
return message.channel.sendEmbed(sunucubilgi);
}
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'dönenrenkler',
description: 'dönenrenkler',
usage: 'dönenrenkler'
};