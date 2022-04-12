module.exports ={
    name: "ban",
    code: `
    $username[$message] has been banned from the guild.
    $ban[$message;$guildID;7;$noMentionMessage]
    $argsCheck[1;Just enter the User ID of who you want to ban.]
    $onlyPerms[ban;Only cool people with ban perms can use this!]
    $onlyBotPerms[ban;hey, i don't have ban members permission to do that]
    ` // bans a user from the server, user id is needed
}