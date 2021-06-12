const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: 'weather',
    permissions: ["SEND_MESSAGES"], 
    aliases: ['wthr'],
    async execute(client, message, args, cmd, Discord) {
    
        weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
            
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please specify a location')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor('#961a5d')
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Fahrenheit', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}


//this took so long to code, there where so many errors. i had to rewrite it 20 times! and even then it wasnt perfect!!! this also is operatinal 