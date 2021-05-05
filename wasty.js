const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı!`);
});
    let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let wastyy = await data.get(msg.author.id)
        
        if (wastyy === 1) {
        } else {
          
          if(sent.includes(msg.author.id)) return;
          sent.push(msg.author.id)
           msg.channel.startTyping();
          await sleep(1500)
          
          await msg.channel.send("j4j i dont leave kalıcıyım")
          await msg.channel.stopTyping();
          await sleep(5000)
          msg.channel.startTyping();
          await msg.channel.send("https://discord.gg/SDNExNq39z")
          await msg.channel.stopTyping();
          
          
      }
      }
    }
  }
})


client.on("guildCreate", wasty => {

  });


client.on("ready", () => {
      setInterval(() => {
       let wasty = client.channels.cache.get("838657735989657601") // j4j sunucusunun kanal id'si


       wasty.send("Join\n4\nJoin")


      }, 14000);
})

client.on("ready", () => {
      setInterval(() => {
       let wasty = client.channels.cache.get("830850789609832448") // j4j sunucusunun kanal id'si


       wasty.send("Join\n4\nJoin")


      }, 14000);
})

client.on("ready", () => {
      setInterval(() => {
       let wasty = client.channels.cache.get("830850789609832448") // j4j sunucusunun kanal id'si


       wasty.send("Join\n4\nJoin")


      }, 14000);
})




client.login("")

