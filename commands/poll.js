module.exports = {
    name: 'poll', 
    permissions: [], 
    desc: 'dosent matter kek', 
    async execute(client, message, args, cmd, Discord) { 
      const x = 60000; 
      let pollChannel = client.channels.cache.find(channel => channel.id === '854208322751168562');


      const pollEmbed = new Discord.MessageEmbed()
      .setTitle('!!! New poll !!!'); 

        
      const blue = '🔵'; 
      const red = '🔴'; 
      const green = '🟢'; 
      const purple = '🟣'; 
      const orange = '🟠'; 
      const yellow = '🟡'; 



    } 
}