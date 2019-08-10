const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar byf+ ile baslar
  

YAKINDA SİZLERLEYİM BEKLEYİN GELİYORUZ MayFe Family
        
       • Kullanıcı Komutları 

• gifara          :: Mesajınızla ilgili gifleri Giphy'da aratır.

       •  Bilgi Komutları
• istatistik      :: Bot Istatistiligini Gosterir.
• yapimcim        :: Bot Yapimcisini Gosterir.
• davet           :: Botun Davet Linkini Verir.
• sponsor         :: Sponsorlarimizi Gosterir.

        •  Genel		
• yardım   :: Tüm komutları listeler.
• ping     :: Botun pingini gösterir.
• duyuru   :: Sunucunuzda duyuru yapmanızı sağlar.
• öner     :: Bot hakkındaki önerilerinizi bot sahiplerine ulaştırır.
• banner   :: Yazdığınız yazıyı bannera çevirir.
    Sayfa 1 / 1 | Yapımcım: ! ByMayFe_0#2956`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar', 'help', 'yardim', 'yardım', 'kullanımlar', 'komutyardım', 'hp', 'ytr', 'sd', 'kd', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'komutlar'
};