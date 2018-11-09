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
  var channel = member.guild.channels.find(ch => ch.name === 'grand-line');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
    setTimeout(function(){
 channel.send("Hello and welcome to the Grandline Review, your source for everything One Piece, except for here, where we talk shit and share memes.\n"+

        "Please go look at <#446962534700810240>, and <#488537146974797824> when given the chance. We would also encourage you to check <#452165353041035266> and to choose and join a crew of your preference. Once you've chosen a crew, DM or ping (if they're online) any Yonko to join that crew, and they'll give you your role and privileges at their earliest convenience.\n"
        +"Enjoy your stay! <:Froppy:451291349145354241>");

}, 500); 
 
});
bot.on("message", async message =>{
    
    
    
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    
    if(!command.startsWith(prefix)) return;
    if(message.author.bot) return;
    if (message.author.id==='290055269206065153') return message.channel.send("ugly, weak excuses for a wolf can't use this bor");
  //  if(command ===`im`||command ===`Im`||command ===`I'm`||command ===`i'm`){
 //      
 //       message.channel.send("Hi "+args+", My name is Froppy.");
 //       return;
 //   }
   
    
 
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
              "\n**You thought this was a froppy command, but it was me, DIO** <:dio:501063483383873538> ",
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
                             +"f!pillow: Posts a pillow gif\n"
                             +"f!coffee: posts a coffee gif\n"
                             +"f!carue: posts a picture of how Carue will look in the future\n"
                             +"f!simp: shows simp and his boulder\n"
                             +"f!mustache: I have no idea why this exists\n"
                             +"f!leam: posts a picture of LEAM\n"
                             +"f!skulljoke: posts a picture that you can see with your eyes, but I don't have any eyes! yohohoho\n"
                             +"f!lewd: a command to use if there is lewd stuff going on....\n"
                             
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
        return;
    }
     if(command ===`${prefix}coffee`){
  
    
     const imagelist = {
            "pillow": [
                "https://imgur.com/a/Fnw89Ks",
                "https://imgur.com/a/TsDVPlC",
                "https://imgur.com/a/tyP9Mom",
                "https://imgur.com/obwm9J1",
                "https://imgur.com/ymOUKfO",
                "https://imgur.com/4UCCOn2",
                "https://imgur.com/PNw4tsz",
                "https://imgur.com/FQTkGhe",
                "https://imgur.com/48JzcWT",
                "https://imgur.com/IhwBDi3",
                "https://imgur.com/Z06aRAa"
                
                
            ]
        };
        var image=imagelist["pillow"];
        var randomImageLink =image[Math.floor(Math.random()*image.length)];
        message.channel.send(randomImageLink);
         return;
     }
     if(command ===`${prefix}carue`){
  
    
     const imagelist = {
            "pillow": [
                "https://imgur.com/a/VNVLJOh",
                "https://imgur.com/a/BTZt83k",
                "https://imgur.com/a/KQ3u65b",
                "https://imgur.com/a/G5ZcMpy",
                "https://imgur.com/a/HKR3JFh"
                
                
            ]
        };
        var image=imagelist["pillow"];
        var randomImageLink =image[Math.floor(Math.random()*image.length)];
        message.channel.send(randomImageLink);
         return;
     }
    
    if(command ===`${prefix}simp`){
        message.channel.send("https://imgur.com/a/ifj2jgu");
        return;
    }
    if(command ===`${prefix}mustache`){
        message.channel.send("<:stache:490669227775229962>");
        return;
    }
    if(command ===`${prefix}leam`){
        message.channel.send("https://imgur.com/a/DG18rZm");
        return;
    }
    
     if(command ===`${prefix}skulljoke`){
        message.channel.send("https://imgur.com/a/GWxBRRD");
        return;
    }
    
    if(command ===`${prefix}lewd`){
        message.channel.send("https://i.imgur.com/qknrvCO.gif");
        return;
    }
    if(command ===`${prefix}ruby`){
        message.channel.send('Once upon a time in a land far, far away, there was a boy named Ruby. He was known as "ruby the failure" as everything he did failed. This is his story. Ruby has always faught power, he was a rebel from the day he joined the server. This failed, as he joined a crew two weeks later. He then tried again, this also failed within days of its creation. Ruby tried one last time to start a revolution, however, this time he was smart about it. He began by demanding something of our lord, his demand was so absurd, that no man would ever imagine doing it. Ruby called it "disrespecting the democratic process" when our lord refused, and the revolution had began. People from all over the land joined his cause, all in the name of democracy. However, people soon learned of his trickery, and abandoned Ruby, calling him "Ruby the Failure" and "Ruby the Lier". This final failed revolution, will forever be known as "the Zeam Rebellion." And Ruby will forever be known as the Failure.  ');
        return;
    }
    if(command ===`${prefix}dad`){
        message.channel.send("<@446739080198488074>. Your child needs you.");
        return;
    }
    if(command ===`${prefix}flashy`||command ===`${prefix}ashy`){
        message.channel.send("https://imgur.com/a/5xqZFzw");
        return;
    }
    if(command ===`${prefix}mom`){
        //message.channel.send("<@272110457068847106>. Your child needs you.");
        message.channel.send("https://imgur.com/a/SC8dbuB");
    }
     if(command ===`${prefix}emperor`){
        message.channel.send("Come back, we miss you.<:sanjisad:484922406880935943>");
        return;
    }
     if(command ===`${prefix}delete`){
        if(message.member.hasPermission('KICK_MEMBERS'))
        {
        message.delete(1000);
        const fetched = await message.channel.fetchMessages({limit: args.toString()});  
        message.channel.bulkDelete(fetched);
        message.channel.send("Deleted "+fetched.size+" messages");
        }else{
            message.channel.send("Error: Improper Permissions");
            return;
        }
        return;
    }
    if(command ===`${prefix}super`){
        message.channel.send("https://imgur.com/a/S3rrcZP");
        return;
    }
     if(command ===`${prefix}cage`){
        message.channel.send("https://imgur.com/a/BA125vw");
        return;
    }
     if(command ===`${prefix}mineta`){
        message.channel.send("A short, weak, and useless character whos only personality trait that stops him from being entirely forgotten is the fact that he is a pervert, and only exist to sell plushy toys does not deserve a command.");
        return;
    }
     if(command ===`${prefix}killme`){
        message.channel.send("You can't kill what is already dead inside!");
        return;
    }
     if(command ===`${prefix}steak`){
        message.channel.send("Steak is still steak regardless of how thin it is cut.");
        return;
    } 
    if(command ===`${prefix}user`){
       let person = message.mentions.users.first() || message.guild.members.get(args[0]);
        message.delete(1000);
        if(!person) return message.author.send("You did not specify a user.");
        message.author.send("Full Username: "+person.username+
                           "\nID: "+person.id+
                           "\nCreated at: "+person.createdAt+
                           "\nEmojis: "+person.emojis);
       return;
    }
    if(command ===`${prefix}punch`){
        message.channel.send("<:ff:500057586863702026><:dd:499071719714062357><:cc:499071699099189258><:ee:499071742556504075><:bb:499071663418245140><:aa:499071615892586496><@446739080198488074>");
        return;
    } 
     if(command ===`${prefix}poof`){
         if(message.author.id==='210197125315821568'){
            let person = message.mentions.users.first() || message.guild.members.get(args[0]);
            if(!person) return message.author.send("You did not specify a user.");
             //person.setAvatar('https://cdn.discordapp.com/emojis/490669227775229962.png');
             person.setNickname("RandomName");
         }else return message.channel.send("no u");
       return;
    }
    if(command ===`${prefix}stab`){
        message.channel.send("<:stabknife:501924912139862038><:stabknife:501924912139862038><:stabknife:501924912139862038><@446739080198488074>");
        return;
    } 
    if(command ===`${prefix}axe`){
        message.channel.send("<:axe:501924866279342091><:axe:501924866279342091><:axe:501924866279342091><@446739080198488074>");
        return;
    } 
     if(command ===`${prefix}shoot`){
        message.channel.send("<:twoshoot:501930411774050324><@446739080198488074><:oneshoot:501930396213182481>");
        return;
    } 
     if(command ===`${prefix}snap`){
        message.channel.send("<:thanos:501931517828661260><@446739080198488074><:spiderman:501931567518580746>");
        return;
    } 
    if(command ===`${prefix}sink`){
        message.channel.send("<:cannon:502271436937887771> <:ball:502301176050483210> <:crabship:502271401072263169>");
        return;
    }
    if(command ===`${prefix}juice`){
        message.channel.send("*drinks Simp's juice*");
        return;
    }
     if(command ===`${prefix}counter`){
      channel.fetchMessages({limit: 1})  
        message.channel.send(channel.fetchMessages({limit: 1}));
        return;
    }
    if(command ===`${prefix}hoff`){
        message.channel.send("**Ni**");
        return;
    }
     if(command ===`${prefix}hulk`){
        message.channel.send("**FROPPY SMASH**");
        return;
    }
    if(command ===`${prefix}bait`){
        message.channel.send("<:iur2:510298311308214272><:twoshoot:501930411774050324><:iu2:510298668260261890>");
        return;
    }
  


});


bot.login(process.env.BOT_TOKEN);
