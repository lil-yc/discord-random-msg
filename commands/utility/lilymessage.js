const { SlashCommandBuilder } = require('discord.js');
const getData = require('../../getData');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lilymessage')
        .setDescription('Gives a random Discord message from user lillingly'),
    async execute(interaction) {
        const msg = await getData('lillingly');
        await interaction.reply(msg);

    },
};