import {Command, CommandMessage, Discord} from '@typeit/discord';
import { MessageEmbed } from 'discord.js';

@Discord("!")
export abstract class Info{
    @Command('info')
    async info(command: CommandMessage){
        command.reply(new MessageEmbed()
        .setColor('#02468f')
        .setTitle('Informacje o bocie.')
        .setThumbnail('https://imgur.com/5gSAi6z.png')
        .setAuthor(command.guild.members.cache.find(member => member.id === '393104366451818506').user.tag)
        .addFields(
            {name: 'Wersja:', value: '1.1.2 \"Coinflipper2000XD\"'},
            {name: 'Github:', value: 'https://github.com/KadEyy/technocratic-discord'}
        ))

    }
}