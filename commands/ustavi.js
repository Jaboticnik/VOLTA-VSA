exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Za uporabo tega ukaza moraš biti v klicu!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Ne predvaja se nič, kar bi lahko bilo ustavljeno!',
            color: 'ORANGE'
        }
    })
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('USTAVLJENO!')
}