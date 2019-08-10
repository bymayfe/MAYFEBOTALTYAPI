const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: AllahaEmanet Aq - Discord Sunucusu",
    url: "https://discord.gg/fqdsZPd",
    description: "İlk sponsor , bu sunucu bir çok özellik barındırıyor.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destekci', 'destekçi'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};