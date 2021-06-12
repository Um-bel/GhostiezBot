module.exports = {
    name: 'spotify', 
    permissions: [], 
    desc: '', 
    execute(client, message, args, cmd, Discord ) {
        let user; 
        if(message.mentions.users.first()) {
            user = message.mentions.users.first(); 
        } else {
            user = message.author; 
        }

        let status = user.presence.activities[0];

        if(user.presence.activities.length === 0) return message.channel.send('please listen to a spotify song, and link your spotify account to discord account to use this command')

        if(status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.sclice(0)}`, 
            url = `https://open.spotify.com/track/${status.syncID}`, 
            name = status.details, 
            artist = status.state, 
            album = status.assets.largeText, 
            timeStart = status.timestamps.start, 
            timeEnd = status.timestamps.end; 

            const embed = new Discord.MessageEmbed() 
            .setAuthor("Spotify Track Info", "https://image.flaticon.com/icons/png/512/2111/2111624.png")
            .setColor("#961a5d")
            .setThumbnail(image)
            .addField("Name:", name, true)
            .addField("Album:", album, true)
            .addField("Artist:", artist, true)
            // .addField("Duration:", time, false)
            .addField("Listen now on spotify", `[\`${artist} - ${name}\`](${url})`, false)
            message.channel.send(embed); 
        }
    }
}