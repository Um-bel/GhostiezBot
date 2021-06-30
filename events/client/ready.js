module.exports = async (Discord, client) =>{
    console.log(`logged in as ${client.user.tag}`); 

    const clientMs = Math.round(client.ws.ping); 
    
    setTimeout(() => {
        client.user.setActivity(`on ${clientMs} ping`, { type: "PLAYING"});
    }, 5000); 

    // const memberCounter = require('../../counters/member-counter'); 

    // memberCounter(client); 
}