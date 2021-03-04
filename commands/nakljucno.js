exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Za uporabo tega ukaza moraš biti v klicu!');
    const queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send('Na seznamu predvajanja ni ničesar, kar bi lahko bilo naključno predvajano')
    let songs = queue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    queue.songs = songs;
    message.client.queue.set(message.guild.id, queue);
    message.channel.send(`Seznam predvajanja se sedaj predvaja naključno 🔀`).catch(console.error);
}
