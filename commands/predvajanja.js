const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Za uporabo tega ukaza moraš biti v klicu!');
    const queue = message.client.queue.get(message.guild.id)
    let status;
    if(!queue) status = 'Ničesar ni na seznamu predvajanja!'
    else status = queue.songs.map(x => '• ' + x.title + ' -Ukaz podan s strani ' + `<@${x.requester.id}>`).join('\n')
    if(!queue) np = status
    else np = queue.songs[0].title
    if(queue) thumbnail = queue.songs[0].thumbnail
    else thumbnail = message.guild.iconURL()
    let embed = new MessageEmbed()
    .setTitle('Seznam predvajanja')
    .setThumbnail(thumbnail)
    .setColor('ORANGE')
    .addField('Trenutno se predvaja', np, true)
    .setDescription(status)
    message.channel.send(embed)
}