const { execute } = require("./avatar");

module.exports = {
    name: "say",
    permissions: ["SEND_MESSAGES"], 
    desciption: "say command",

    async execute(client, message, args, cmd, Discord) {
       try{ 
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    } catch (error){
        message.channel.send('there was an unknown error')
        console.log(error)
    }
}
}
//this works fine, i think...