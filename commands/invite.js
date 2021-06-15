module.exports = {
    name: 'invite', 
    permissions: [], 
    desc: 'gives invite link', 
    execute(client, message, args, cmd, Discord) {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=851585411952541729&scope=bot&permissions=8')
    }
}