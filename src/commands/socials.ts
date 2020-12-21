import {Command, CommandMessage, Discord} from '@typeit/discord';
import { MessageEmbed } from 'discord.js';

@Discord("!")
export abstract class Socials{
    @Command('socialsy')
    async socials(command: CommandMessage){
        command.reply(new MessageEmbed()
        .setColor('#02468f')
        .setTitle('Społeczności:')
        .setThumbnail('https://imgur.com/5gSAi6z.png')
        .addFields(
            {name: 'Nasza strona:', value:'https://partiatechnokraci.online/'},
            {name: 'Nasz fanpage na FB:', value: 'https://www.facebook.com/partiatechnokratyczna/'},
            {name: 'Grupa Ad Personam/Debatawka:', value: 'https://pl-pl.facebook.com/groups/323110278650861/'},
            {name: 'Fanpage Ad Personam:', value: 'https://www.facebook.com/Ad-Personam-101684234829001/'},
            {name: 'Discord Ad Personam:', value: 'https://discord.gg/pDru7pb'},
            {name: 'YouTube Ad Personam:', value:'https://www.youtube.com/channel/UCsD5AgWL08EinVvVs7-GkBQ'}
        ))
    }
}