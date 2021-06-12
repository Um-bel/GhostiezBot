const child = require('child_process'); 

module.exports = {
    name: 'terminal', 
    permissions: [], 
    desc: "will get info about the server you're on", 
    async execute(client, message, args, cmd, Discord) {
        if(message.author.id  !== '804829914963378216') return message.channel.send("sorry only Umbel can use this command :("); 


        const terminalCommand = args.join(" "); 
        if(!args[0]) return message.channel.send('Please specify a valid terminal command');

        child.exec(terminalCommand, (err, res) => {
            if(err) return console.log(err); 
            message.channel.send(res.slice(0, 2000), { code: 'js'  }); 
        })
    }
}