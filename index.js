const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS]})

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

require('./deploy-command');

client.on('ready', () => {
    client.user.setActivity('Não tenho prefixo. Digita /', {type: 'PLAYING', name: 'Não tenho prefixo. Digita /'});
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply({content: 'Pong!', ephemeral: true});
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if(commandName === 'teste') {
        await interaction.reply('Isso é um teste.');
    }
});

client.login(process.env.TOKEN);