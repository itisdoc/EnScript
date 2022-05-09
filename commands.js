async function run(message, client) {
  if (message.content.startsWith('!play ')) {
    const play = require('play-dl');
       const args = message.content.slice().trim(1).split(/ +/g);
    const connection = await message.member.voice.channel.join()
console.log(args[1])
     const source = await play.stream(args[1]) // YouTube Video Stream

                   const dispatcher = await connection.play(source.stream, {
                        type: source.type
                    })

    dispatcher.on('finish', async () => {
      message.channel.send('Finished!')
      await message.guild.me.voice.channel.leave()
    })
   
  }
}

module.exports = {
  run
}