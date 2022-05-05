const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.TOKEN,
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    prefix: "e;"
})

bot.status.add({
    name: "Epok",
    duration: 12000
})

bot.addEvent("onMessage")

bot.commands.load(`./commands/`)


bot.start()