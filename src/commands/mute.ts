import {Command, CommandMessage, Discord} from '@typeit/discord';
import {convertSecondsToTime} from '../util'
import {announceChannelID} from '../data'

interface MutedUserData{
    since: number;
    for: number;
}

interface MutedMap{
    [key: string]: MutedUserData | null
}

export const muted: MutedMap = {};

@Discord("!")
export abstract class Mute{
    @Command('wycisz :s')
    async mute(command: CommandMessage){
        if(!command.member.hasPermission('ADMINISTRATOR')){
            command.reply('nie masz uprawnień by używać tej komendy!')
        }
        else{
            const s = parseInt(command.args.s);
            if(Number.isNaN(s)){
                command.reply('nie podałeś/aś czasu wyciszenia!')
            }
            else{
                const announceChannel = command.guild.channels.cache.get(announceChannelID);
                const since = new Date().getTime();
                const time = convertSecondsToTime(s);
                command.mentions.users.forEach(user => {
                    if(announceChannel.isText()) announceChannel.send(`**${user} zostajesz wyciszony/a na **\`${time}\`** przez ${command.author} - możesz spytać go/jej o powód w prywatenej wiadomości.**`)
                    muted[user.id] = {since: since, for: s * 1000}
                })
            }
        }
    }
    @Command('anulujWyciszenie')
    async unmute(command: CommandMessage){
        if(!command.member.hasPermission('ADMINISTRATOR')){
            command.reply('nie masz uprawnień by używać tej komendy!')
        }
        else{
            command.mentions.users.forEach(user => muted[user.id] = null);
        }
    }
}