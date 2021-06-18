const { mongoose } = require("mongoose");

module.exports = {
    name: 'beg', 
    permissions: [], 
    desc: 'begs for money', 
    async execute(client, message, args, cmd, Discord, profileData) {
        const newBal = Math.floor(Math.random() * 50) + 35; 
        const finalBal = newBal + profileData.pellets; 


        let profileUpdate = await profileData.findOneAndUpdate({
            userID: message.author.id, 
            serverID: message.guild.id, 
            pellets: finalBal, 
            bank: 0
        }); 
        profileUpdate.save(); 
    }
}