const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]}); 
require('dotenv').config();
require('discord-buttons')(client); 
const mongoose = require('mongoose'); 

mongoose.connect(process.env.MONGO_SRV, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
}); 


client.commands = new Discord.Collection(); 
client.events = new Discord.Collection(); 

['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord); 
}); 

client.login(process.env.TOKEN); 