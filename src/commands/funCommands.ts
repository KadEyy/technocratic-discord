import {Command, CommandMessage, Discord} from '@typeit/discord';
import {randomFromRange} from '../util';

@Discord("!")
export abstract class FunCommands{
    @Command('rzutMoneta')
    async coinflip(command: CommandMessage){
        command.reply(Math.floor(Math.random() * 2) === 0 ? 'Orzeł' : 'Reszka');
    }
    @Command('losujLiczbe :od :do')
    async randomize(command: CommandMessage){
        const min = Math.ceil(parseInt(command.args.od));
        const max = Math.floor(parseInt(command.args.do));
        if(Number.isNaN(min) || Number.isNaN(max)){
            command.reply('podałeś/aś nieprawidłowy przedział!')
        }
        else{
            command.reply(`\`losowa liczba z przediału to: ${randomFromRange(min, max)}.\``)
        }
    }
}