module.exports = {
    name: 'clear', 
    permissions: ["MANAGE_MESSAGES"], 
    desc: 'will deleate a number of messages in a text channel', 
    async execute(client, message, args, cmd, Discord){        
        
    if(!args[0]) return message.send("you need to at least delete one message to use this command :)"); 
    if(isNaN(args[0])) return message.send('please put in a real number'); 

    if(args[0] > 100) return message.send("you cant clear more then 100, otherwise it will crash the bot :("); 
    if(args[0] < 1) return message.send("you need to at least delete one message to use this command :)"); 

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages); 
        }); 
    } 
}
//this works fine, but you need the "mannage messages" perms