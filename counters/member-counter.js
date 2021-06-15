module.exports = async (client) => {
    const guild = client.guilds.cache.get('820765524275363840'); 

    setInterval(() => {
        const memberCount = guild.memberCount; 
        const channel = guild.channels.cache.get('854432126198874122'); 
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`); 
    }, 5000); 
}