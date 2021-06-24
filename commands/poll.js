module.exports = {
    name: 'poll', 
    permissions: [], 
    desc: 'dosent matter kek', 
    async execute(client, message, args, cmd, Discord) {

      const x = 60000; 
      let pollChannel = client.channels.cache.find(channel => channel.id === '854208322751168562');
    
      let reactions = [
        '🔵', 
        '🔴', 
        '🟢', 
        '🟣', 
        '🟠', 
        '🟡', 
      ]; 


      await message.channel.send(`list yours polls please`); 
      let pollMap = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});
      await message.channel.send(`and how long do you want the poll to go on for?`); 
      let pollTime = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, {time: x*30, max: 1, errors: ["time"]});

      let res = pollMap.first().content; 
      const resArray = res.split(", ");
 
      if(resArray.length > 6) {
        return message.channel.send("you can't have more than 6 polls"); 
      }

      let pollDesc = ""; 
      resArray.forEach((res, index) => {
        pollDesc += `${reactions[index]} ➤ ${res}\n\n`
      }); 


      const timeForPoll = parseInt(pollTime.first().content) * 1000 
      const pollEmbed = new Discord.MessageEmbed()
      .setAuthor(`Time: ${pollTime.first().content} secs`)
      .setTitle(`!!! New Poll !!!`)
      .setDescription(pollDesc); 

      await message.channel.send(pollEmbed).then(pollEmbedMessage => {

        for(var i = 0; i < resArray.length; i++) {
          pollEmbedMessage.react(reactions[i]); 
        }

        const filter = (reaction, user) => {
          return reactions.includes(reaction.emoji.name) && !user.bot; 
        }

      }).then(collected => {
          let collectedArray = collected.array(); 

          let collectedReactions = collectedArray.map(item => item._emoji.name); 
          let reactionCounts = {}; 

          collectedReactions.forEach(reaction => {
            if(reactionCounts[reaction]) {
              reactionCounts[reaction]++
            } else {
              reactionCounts = 1
            }
          })

          let pollResults = ""; 
          resArray.forEach((res, index) => {
            let voteCount = 0; 
            if(reactionCounts[reactions[index]]) {
              voteCount = reactionCounts[reactions[index]]
            }
            let voteCountContent = `(${voteCount} vote${voteCount !== 1 ? 's' : ''})`
            pollResults += `${reactions[index]}: ${res} ${voteCountContent}\n\n`; 
          })

          const resultsEmbed = new Discord.MessageEmbed()
          .setTitle(`Results: (${collectedArray.length} votes collected)`)
          .setDescription(pollResults);

          message.channel.send(resultsEmbed); 
      }); 
    }
}