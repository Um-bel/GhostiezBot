module.exports = async (Discord, client) =>{
    console.log(`logged in as ${client.user.tag}`); 

    const clientMs = Math.round(client.ws.ping); 
    
    setTimeout(() => {
        client.user.setActivity(`On ${clientMs} ping`, { type: "PLAYING"});
    }, 500); 

    // const memberCounter = require('../../counters/member-counter'); 

    // memberCounter(client); 
}