module.exports = {
    name: 'ping', 
    permissions: ["SEND_MESSAGES"], 
    desc: 'this is a ping command.', 
    execute(client, message, args, cmd, Discord){
        message.channel.send(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`); 
    }
}