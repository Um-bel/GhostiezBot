module.exports = async (Discord, client) =>{
    console.log(`logged in as ${client.user.tag}`); 

    const clientMs = Math.round(client.ws.ping); 
    

        client.user.setActivity(`https://www.twitch.tv/anthonytookit`, { type: "WATCHING"});
 

    // const memberCounter = require('../../counters/member-counter'); 

    // memberCounter(client); 
}