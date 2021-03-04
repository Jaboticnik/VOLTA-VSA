exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Pomoč',
            description: `
            v!predvajaj ali v!p <Naslov skladbe> - Predvaja glasbo ponudnika glasbenih storitev-Youtube
            v!premor - Začasno ustavi pesem
            v!nadaljuj - nadaljuje začasno ustavljeno pesem
            v!podatki - prikaže informacije o trenutno predvajani skladbi
            v!preskoci - Preskoči na naslednjo skladbo
            v!ustavi - Ustavi skladbo
            v!glasnost <vrednost 1-10> - spremeni glasnost predvajanja
            v!predvajanja - prikaže seznam predvajanja
            v!besedilo - prikaže besedilo pesmi
            v!nakljucno - naključno predvaja pesmi s seznama predvajanja
            v!pomoc - prikaže možne ukaze
            `,
            color: 'ORANGE'
        }
    })
}
