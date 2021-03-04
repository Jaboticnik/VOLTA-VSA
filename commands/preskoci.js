exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Za uporabo tega ukaza moraš biti v klicu!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'Seznam predvajanja je prazen, zato je preskočitev onemogočena! Na seznam predvajanja skladbo dodaj tako `v!predvajaj <Imeskladbe>`',
            color: 'ORANGE'
        }
    })
}
    if(queue.songs.length !== 0) {
        message.react('✅')
        queue.connection.dispatcher.end('Pesem je bila preskočena')
    }
}