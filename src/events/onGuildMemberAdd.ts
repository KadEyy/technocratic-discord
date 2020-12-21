import {ArgsOf, On} from '@typeit/discord';
import {guestRoleID, welcomeChannelID} from '../data';

export abstract class onGuildMemberAdd{
    @On('guildMemberAdd')
    memberJoin([member]: ArgsOf<'guildMemberAdd'>){
        member.roles.add(member.guild.roles.cache.get(guestRoleID));
        const welcomeChannel = member.guild.channels.cache.get(welcomeChannelID);
        if(welcomeChannel.isText()) welcomeChannel.send(`**Witaj na  serwerze discord Partii Technokratycznej ${member}!**`);
    }
}