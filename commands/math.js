const math = require('mathjs'); 

module.exports = {
    name: 'math', 
    permissions: [], 
    desc: 'will get the awnser to a math problem', 
    async execute(client, message, args, cmd, Discord){  
        
        if(!args[0]) return message.channel.send('please provide a question'); 

        let resp; 

        try {

            resp = math.evaluate(args.join(" "))
        } catch (err) {
            return message.channel.send('please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``) 
        .addField('Awnser', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed)

    }

}
