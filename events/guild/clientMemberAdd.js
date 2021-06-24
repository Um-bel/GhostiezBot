const profileModel = require('../../models/profileData'); 

module.exports = async (client, discord, member) => {

    // const guild = client.guilds.cache.get(guild => guild.id === '805222583644717067'); 
    // const role = guild.roles.cache.get(role => role.id === '805423049288974336'); 

    // member.roles.add(role); 
    
    let profile = await profileModel.create({
        userID: member.id, 
        serverID: member.guild.id, 
        pellets: 100,
        bank: 0,
    }); 
    profile.save(); 
}