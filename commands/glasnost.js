exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Za uporabo tega ukaza moraš biti v klicu!');

    let queue = message.client.queue.get(message.guild.id)

    if(!args[0]) return message.channel.send({
        embed: {
            description: 'Trenutna glastnost je: ' + queue.volume
        }
    })

    if(args[0] > 10) return message.channel.send('Izbrana vrednost je prevelika, izbirate lahko od 1-10')

    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    queue.volume = args[0]
    message.channel.send({
        embed: {
            description: 'Glasnost je bila spremenjena na ' + args[0]
        }
    })
}