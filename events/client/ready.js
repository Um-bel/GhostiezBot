module.exports = async (Discord, client) =>{ 
    console.log(`logged in as ${client.user.tag}`); 
    client.user.setActivity('>help', { type: "PLAYING"});
}