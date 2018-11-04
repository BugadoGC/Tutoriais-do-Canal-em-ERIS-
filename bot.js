const Eris = require('eris');

const Bot = new Eris.CommandClient(suatoken);

var bot = Bot;

Bot.registerCommand('mcskin', (msg, args) => {
var args1 = args.join('')
if(args.length === 2) {
    msg.channel.createMessage('As skins de minecraft possuem apenas uma linha de nome!')
} else {
if(args.length === 0) {
    msg.channel.createMessage('Comando incorreto! Modo correto: >mcskin <suaskin>')
} else {

var url23 = `https://minotar.net/body/` + `${args1}` + `/100.png`
msg.channel.createMessage({
    embed: {
       image: {
          url: url23
       },
       author: {
          name: `${msg.author.username}#${msg.author.discriminator}`
       },
       color: 0x00FFFF
    }
 });
}
}
});