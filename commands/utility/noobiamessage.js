const { SlashCommandBuilder } = require('discord.js');
const getData = require('../../getData');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('noobiamessage')
        .setDescription('Gives a random Discord message from user noobiaa'),
    async execute(interaction) {
        const msg = await getData('noobiaa');
        await interaction.reply(msg);

    },
};