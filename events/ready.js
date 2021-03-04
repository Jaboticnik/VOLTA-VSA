module.exports = (client) => {
    console.log('Prikazan sem kot' + client.user.tag)
    client.user.setActivity('Made in Slovenia', { type: 'WATCHING' })
}