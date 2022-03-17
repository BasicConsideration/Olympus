const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
   console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content === "Hello!"){
        message.reply("Hello World!")
    }
})

/* Keep this at the bottom of the file! */
client.login(process.env.TOKEN)