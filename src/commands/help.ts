import {Command, CommandMessage, Discord} from '@typeit/discord';
import { MessageEmbed } from 'discord.js';

@Discord("!")
export abstract class Help{
    @Command('pomoc')
    async help(command: CommandMessage){
        command.reply(new MessageEmbed()
        .setColor('#02468f')
        .setTitle('Dostępne komendy:')
        .setThumbnail('https://imgur.com/5gSAi6z.png')
        .addFields(
            {name: '!ping', value: 'Zobacz czy bot ci odpowie!'},
            {name: '!info', value: 'Podstawowe informacje o bocie.'},
            {name: '!socialsy', value: 'Wszystkie social media partii i projektu Ad Personam.'}
        ))
    }
}