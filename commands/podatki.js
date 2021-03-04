const { MessageEmbed } = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Za uporabo tega ukaza moraš biti v klicu!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: 'Trenutno se nič ne predvaja'
        }
    })
    message.channel.send({
        embed:{
            title: 'Trenutno predvajano',
            description: queue.songs[0].title + ' Ukaz podan s strani: ' + '<@' + queue.songs[0].requester + '>',
            color: 'ORANGE',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}