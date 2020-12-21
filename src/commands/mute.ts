import {Command, CommandMessage, Discord} from '@typeit/discord';
import { GuildMember, User } from 'discord.js';

@Discord("!")
export abstract class Mute{
    @Command('wycisz :ms')
    async mute(command: CommandMessage){
        const mutedUsers: User[] = [];
        command.mentions.users.forEach(user => mutedUsers.push(user));
        const ms = parseInt(command.args.ms);
    }
}