import {Discord, Command, CommandMessage, CommandNotFound} from '@typeit/discord';
import path from 'path';
import {prefix} from './data';

@Discord(prefix, {
    import: [
        path.join(__dirname, 'events', '*.ts'),
        path.join(__dirname, 'commands', '*.ts')
    ]
})
export abstract class DiscordBot{
    @Command("ping")
    ping(command: CommandMessage): void {
        command.reply("pong!");
    }
    @CommandNotFound()
    notFoundA(commad: CommandMessage) {
        commad.reply('Nie znaleziono takiej komendy!');
  }
}