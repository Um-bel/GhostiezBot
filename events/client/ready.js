module.exports = async (Discord, client) =>{ 

    const clientMs = Math.round(client.ws.ping); 

    console.log(`logged in as ${client.user.tag}`); 
    client.user.setActivity(`On ${clientMs} ping`, { type: "PLAYING"});

    // const memberCounter = require('../../counters/member-counter'); 

    // memberCounter(client); 
}