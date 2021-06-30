module.exports = {
    name: 'poll', 
    permissions: [], 
    desc: 'dosent matter kek', 
    async execute(client, message, args, cmd, Discord) {

      let x = 60000; 
      let survay = {}; 

      let reactions = [
        "1️⃣",
        "2️⃣",
        "3️⃣",
        "4️⃣"
      ]; 

      message.channel.send("what is the poll question?").then(() => {
        let filter = (message) => !message.author.bot; 
          let options = {
            max: 1, 
            time: x*15, 
          }; 

          return message.channel.awaitMessages(filter, options);
      }).then((collected) => {
        survay.question = collected.array()[0].content; 
        return message.channel.send("and how long do you want the poll to be?");
      
      }).then(() => {
        let filter = (message) => !message.author.bot; 
        let options = {
          max: 1, 
          time: x*15, 
        }; 

        return message.channel.awaitMessages(filter, options);
      }).then((collected) => {

        if(!isNaN(collected.array()[0].content)) {
          survay.timeout = collected.array()[0].content; 

          return message.channel.send("and what are the options for the poll?"); 
        } else {
          throw "time_format_error"
        }
      }).then(() => {
        let filter = (message) => !message.author.bot; 
        let options = {
          max: 1, 
          time: x*15, 
        }; 

        return message.channel.awaitMessages(filter, options);
      }).then((collected) => {
        survay.answers = collected.array()[0].content.split(", "); 

        let survayDesc = ""; 

        survay.answers.forEach((question, index) => {
          survayDesc += `${reactions[index]}: ${question}\n`; 
        }); 

        let survayEmbed = new Discord.MessageEmbed()
        .setTitle(`New poll: ${survay.question}`)
        .setAuthor(`time: ${survay.timeout} seconds`) 
        .setDescription(survayDesc); 

        return message.channel.send(survayEmbed); 
      }).then(survayEmbedMessage => {
        for(var i = 0; i < survay.answers.length; i++) {
          survayEmbedMessage.react(reactions[i]); 
        }

        const filter = (reaction, user) => {
          return reactions.includes(reaction.emoji.name) && !user.bot; 
        }; 

        const options = {
          time: survay.timeout * 1000
        }

        return survayEmbedMessage.awaitReactions(filter, options); 
      }).then(collected => {
        let collectedArray = collected.array(); 

        let collectedReactions = collectedArray.map(item => item._emoji.name); 
        let reactionCounts = {}; 

        collectedReactions.forEach(reaction => {
          if(reactionCounts[reaction]) {
            reactionCounts[reaction]++
          } else {
            reactionCounts[reaction] = 1
          }
        }); 

        let survayResults = ""
        survay.answers.forEach((question, index) => {
          let voteCount = 0; 
          if(reactionCounts[reactions[index]]) {
            voteCount = reactionCounts[reactions[index]]
          }

          let voteCountContent = `(${voteCount} vote${voteCount !== 1 ? 's' : ''})`; 
          
            const totalVotes = collectedArray.length;
            const voteCountPersent = voteCount/totalVotes;
            const finalPersentage = `${voteCountPersent*100}%`; 
          /* I'm calculating %'s here. what im doing is: 
          
          getting all of the total votes: collectedArray.length; 

          divide each variable by the total votes. lucky for me, voteCount is a forEach loop

          then get the final persnetage by mutiplying each by 100
          **/
          

          survayResults += `${reactions[index]}: ${question} ${finalPersentage}\n`; 

        }); 

        let survayResultsEmbed = new Discord.MessageEmbed()
        .setTitle(`Results for '${survay.question}' (${collectedArray.length} total votes)`)
        .setDescription(survayResults); 

        message.channel.send(survayResultsEmbed); 
      })
    }
}