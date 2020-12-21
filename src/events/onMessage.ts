import {ArgsOf, On} from '@typeit/discord';
import {convertSecondsToTime} from '../util';
import {muted} from '../commands/mute';

export abstract class onGuildMemberAdd{
    @On('message')
    message([message]: ArgsOf<'message'>){
        const time = new Date().getTime();
        const mutedUser = muted[message.author.id] ? muted[message.author.id] : false;
        if(mutedUser && mutedUser.since + mutedUser.for > time && !message.member.hasPermission('ADMINISTRATOR')){
            message.delete();
            message.author.send(`**Zostałeś/aś wyciszony/a na serwerze Partii Technokratów, pozostały czas wyciszenia to** \`${convertSecondsToTime(Math.floor((mutedUser.since + mutedUser.for - time)/1000))}\`**.**`)
        }
    }
}