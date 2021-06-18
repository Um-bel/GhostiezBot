module.exports = async (client) => {
    const guild = client.guilds.cache.get('805222583644717067'); 

    setInterval(() => {
        const memberCount = guild.memberCount; 
        const channel = guild.channels.cache.get('831550116132421712'); 
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`); 
    }, 5000); 
}