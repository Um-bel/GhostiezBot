const cooldowns = new Map(); 

module.exports = async (Discord, client, message) => {

    const prefix = '>'; 

    if (message.author.bot) return
//why does this world have so much hate speech :(
    const profanity = [
    "fuck", 
    "fuckin", 
    "fucking", 
    "bitch", 
    "bitchin", 
    "bitching", 
    "shit", 
    "shithead", 
    "shitty", 
    "nigga", 
    "nigger", 
    "faggot", //levels
    "fag"]
    const blocked = profanity.filter(w => message.content.toLowerCase().includes(w));
    if (blocked.length > 0) {
        message.delete().catch(err => console.log(err))
       message.channel.send(`${message.author}, you kiss your mother with that mouth?`)
      }      

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); 
    const cmd = args.shift().toLowerCase(); 

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));


    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

if(command.permissions.length){
    let invalidPerms = []
    for(const perm of command.permissions){
        if(!validPermissions.includes(perm)){
            return console.log(`you typed an invalid permission. it was ${perm}`);     
        }
        if(!message.member.hasPermission(perm)){
            invalidPerms.push(perm); 
            break; 
        }
    }
    if (invalidPerms.length){
        return message.channel.send(`Boppity boo, this command is too powerful for you. (missing ${invalidPerms})`); 
    }
}

if(!cooldowns.has(command.name)){
    cooldowns.set(command.name, new Discord.Collection()); 
}

const current_time = Date.now(); 
const time_stamps = cooldowns.get(command.name); 
const cooldown_ammount = (command.cooldown) * 1000; 

if(time_stamps.has(message.author.id)){
    const expiration_time = time_stamps.get(message.author.id) + cooldown_ammount; 

    if(current_time < expiration_time){
        const time_left = (expiration_time - current_time) / 1000; 

        return message.reply(`you have ${time_left.toFixed(1)} more seconds before you can use ${command.name} again`); 
    }
}

time_stamps.set(message.author.id, current_time); 
setTimeout(() => time_stamps.delete(message.author.id), cooldown_ammount); 

    if(command) command.execute(client, message, args, cmd, Discord); 
} 