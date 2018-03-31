const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("ADMIN-D3TR, d!help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDI5NjQ4ODI3NzU5MzI5Mjkw.DaFC3w.g7C-IBwvMfkCYJXsCAhuNG4vNVo");
