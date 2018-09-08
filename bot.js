const Discord = require("discord.js");
const bot = new Discord.Client({
    disableEveryone: true
});
const prefix= 'f!';


//bot.on("ready", ()=> {
  //  console.log('I am ready!');
//});
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send("Hello and welcome to the Grandline Review, your source for everything One Piece, except for here, where we talk shit and share memes.\n"+

        "We would encourage you to check <#452165353041035266> and to choose and join a crew of your preference. Once you've chosen a crew, DM or ping (if they're online) any Yonko to join that crew, and they'll give you your role and privileges at their earliest convenience.\n"
        +"Enjoy your stay! <:Froppy:451291349145354241>");
});
bot.on("message", async message =>{
    
    
    
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    

    if(message.author.bot) return;
    if(!command.startsWith(prefix)) return;

    if(command ===`${prefix}bubba`){
        message.channel.send("**OOF**");
        return;
    }
   
    if(command ===`${prefix}froppy`){
        const imagelist = {
            "froppy":
            [
              "https://imgur.com/a/0mt823w",
              "https://imgur.com/a/Az6wsPE",
              "https://imgur.com/a/CbVe6kB",
              "https://imgur.com/a/vRrGoEB",
              "https://imgur.com/a/kWNuvLq",
              "https://imgur.com/a/2qMuQeM",
              "https://imgur.com/a/KgbdBO5",
              "https://imgur.com/a/WCeDjQo",
              "https://imgur.com/a/P2fqtGT",
              "https://imgur.com/a/ivambO2",
              "https://imgur.com/a/UyiG44m",
              "https://imgur.com/a/43PvuCf",
              "https://imgur.com/a/eeXQ4nh",
              "https://imgur.com/a/WlwuCrc",
              "https://imgur.com/a/eQcorKr",
              "https://imgur.com/a/xVVci8m",
              "https://imgur.com/a/36ZEQXA",
              "https://imgur.com/a/oqVxc35",
              "https://imgur.com/a/2aMOXYy",
              "https://imgur.com/a/CJOItOJ",
              "https://imgur.com/a/0RWZ0EW",
              "https://imgur.com/a/lVfOC1c",
              "https://imgur.com/a/xpF96Fx",
              "https://imgur.com/a/Agltl0s",
              "https://imgur.com/a/ZqCOvtX",
              "https://imgur.com/a/nEdgTaC",
              "https://imgur.com/a/SA80gUh",
              "https://imgur.com/a/toHZGBL",
              "https://imgur.com/a/dl9yMVq",
              "https://imgur.com/a/nCyfsrp",
              "https://imgur.com/a/HoLyzRT",
              "https://imgur.com/a/96fJ3HH",
              "https://imgur.com/a/3erTCE7",
              "https://imgur.com/a/7ew0pS2",
              "https://imgur.com/a/Btxq3BZ",
              "https://imgur.com/a/fzdE0T8",
              "https://imgur.com/a/Ls5tZl4",
              "https://imgur.com/a/ROcWqNN",
              "https://imgur.com/a/fzuECfl",
              "https://imgur.com/a/r1BdNop",
              "https://imgur.com/a/yq05nAL",
              "https://imgur.com/a/Tf0FaNf",
              "https://imgur.com/a/Gjg1WFv",
              "https://imgur.com/a/AkEFQDL",
              "https://imgur.com/a/mHbErIF",
              "https://imgur.com/a/xYdY7VN",
              "https://imgur.com/a/VDa0GTM",
              "https://imgur.com/a/Z6Rzt5l",
              "https://imgur.com/a/cjyTvou",
              "https://imgur.com/a/H2WErib",
              "https://imgur.com/a/FidOafU",
              "https://imgur.com/a/87FjQdY",
              "https://imgur.com/a/VNQpSty",
              "https://imgur.com/a/0CU23Lw",
              "https://imgur.com/a/JxMt2yk",
              "https://imgur.com/a/97d9aMc",
              "https://imgur.com/a/sDD4NJ8",
              "https://imgur.com/a/BzPnZvS",
              "https://imgur.com/a/3EZJsO1",
              "https://imgur.com/a/O5t86OW",
              "https://imgur.com/a/rZJKlAm",
              "https://imgur.com/a/Q6rIhAe",
              "https://imgur.com/a/DhYzI4k",
              "https://imgur.com/a/PQkK6v0",
              "https://imgur.com/a/EYtNoeh",
              "https://imgur.com/a/foFA2pr",
              "https://imgur.com/a/XsS68c1",
              "https://imgur.com/a/7ZEJObS",
              "https://imgur.com/a/qyeGc8g",
              "https://imgur.com/a/llT0jXz",
              "https://imgur.com/a/l9Qru4W",
              "https://imgur.com/a/okKkMYw",
              "https://imgur.com/a/SPsEjvr",
              "https://imgur.com/a/pXAMPgt",
              "https://imgur.com/a/AyKrUKP",
              "https://imgur.com/a/D1XaWoY",
              "https://imgur.com/a/ZzY7bww",
              "https://imgur.com/a/sMaZyFj",
              "https://imgur.com/a/q7Cl1BM",
              "https://imgur.com/a/opuElW5",
              "https://imgur.com/a/f3coCgb",
              "https://imgur.com/a/mPuIk9o",
              "https://imgur.com/a/Ne4y50d",
              "https://imgur.com/a/zPCjLgJ",
              "https://imgur.com/a/Ea9NbsN",
              "https://imgur.com/a/dulaLHA",
              "https://imgur.com/a/2KBXzMs",
              "https://imgur.com/a/grxaaZk",
              "https://imgur.com/a/z0xvNXy",
              "https://imgur.com/a/5xG8kKQ",
              "https://imgur.com/a/FQCs4ML",
              "https://imgur.com/a/8Sv1u9e",
              "https://imgur.com/a/tTttlwF",
              "https://imgur.com/a/I2Ba6C5",
              "https://imgur.com/a/PVgOwFV",
              "https://imgur.com/a/HkArzmU",
              "https://imgur.com/a/FDz0XLi",
              "https://imgur.com/a/MSkLqIl",
              "https://imgur.com/a/H3cYgm1",
              "https://imgur.com/a/2ZLktqM",
              "https://imgur.com/a/VQ3FEUP"
            ]
          };
       
     
  
    var image=imagelist["froppy"];
        var randomImageLink =image[Math.floor(Math.random()*image.length)];
        message.reply("Here is some <:Froppy:451291349145354241>"+randomImageLink);
        
      return;
    }
    if(command ===`${prefix}disable`){
        process.exit()
        return;
    }
    if(command ===`${prefix}help`){
         message.author.send("f!froppy: Sends a picture of froppy\n"
                             +"f!bubba: Sends a big bold oof in chat\n"
                             +"f!disable: Disables Froppy bot incase of an emergency\n"
                            );
        return;
    }
    if(command===`${prefix}pillow`){
                const imagelist = {
            "pillow": [
                "https://i.imgur.com/bVJ3AcH.gif",
                "https://i.imgur.com/j64lEFF.gif",
                "https://i.imgur.com/LbNTbtr.gif",
                "https://i.imgur.com/MCCLrhu.gif",
                "https://i.imgur.com/KAodnQe.gif",
                "https://i.imgur.com/IuVG7Hz.gif",
                "https://i.imgur.com/5EhugGk.gif",
                "https://i.imgur.com/aNGTr8V.gif",
                "https://i.imgur.com/djY1ecN.gif",
                "https://i.imgur.com/sZwdC1Q.gif",
                "https://i.imgur.com/aswyWIq.gif",
                "https://i.imgur.com/7tENNaJ.gif",
                "https://i.imgur.com/4AkRU3H.gif",
                "https://i.imgur.com/ZqM7YHB.gif",
                "https://i.imgur.com/mepMkQ3.gif",
                "https://i.imgur.com/AnAycTj.gif",
                "https://i.imgur.com/k6eCF4M.gif",
                "https://i.imgur.com/6zkqhel.gif",
                "https://i.imgur.com/bg5RqRg.gif",
                "https://i.imgur.com/bMQcDtE.gif",
                "https://i.imgur.com/ndJ8jcM.gif",
                "https://i.imgur.com/MMPquvC.gif",
                "https://i.imgur.com/cleqoVO.gif",
                "https://i.imgur.com/cnD8CcI.gif",
                "https://i.imgur.com/8cNBnNq.gif",
                "https://i.imgur.com/4cW2pQ2.gif",
                "https://i.imgur.com/ZqM7YHB.gif",
                "https://i.imgur.com/4AkRU3H.gif",
                "https://i.imgur.com/dTOFaC2.gif",
                "https://i.imgur.com/cwHH5V7.gif",
                "https://i.imgur.com/STbALgM.gif",
                "https://i.imgur.com/BJoZ04W.gif",
                "https://i.imgur.com/dj6CjGO.gif",
                "https://i.imgur.com/NSfgZsw.gif",
                "https://i.imgur.com/gb7ma4u.gif",
                "https://i.imgur.com/GRrwEp8.gif",
                "https://i.imgur.com/vm7bshe.gif",
                "https://i.imgur.com/xBLrwKs.gif",
                "https://i.imgur.com/gD8Pp6c.gif",
                "https://i.imgur.com/30vhm5Z.gif",
                "https://i.imgur.com/iXsFSjU.gif",
                "https://i.imgur.com/gQWBRsf.gif",
                "https://i.imgur.com/MCCLrhu.gif",
                "https://i.imgur.com/iX7Qe10.gif",
                "https://i.imgur.com/Tc2uD1Y.gif",
                "https://i.imgur.com/j76TZwx.gif",
                "https://i.imgur.com/PTNg7Y6.gif",
                "https://i.imgur.com/EzhbFbd.gif"
            ]
        };
        var image=imagelist["pillow"];
        var randomImageLink =image[Math.floor(Math.random()*image.length)];
        message.channel.send(randomImageLink);
    }
    


});


bot.login(process.env.BOT_TOKEN);
