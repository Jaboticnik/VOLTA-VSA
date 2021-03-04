exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Lastnik',
            description: `
            @Jabotičnik#0001 in @Brokas#6666
            `,
            color: 'ORANGE'
        }
    })
}