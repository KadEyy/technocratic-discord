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
            {name: '!socialsy', value: 'Wszystkie social media partii i projektu Ad Personam.'},
            {name: '!rzutMoneta', value: 'Orzeł czy reszka? :thinking:'},
            {name: '!losujLiczbe :od :do', value: 'Losuj liczbę z podanego przedziału!'},
            {name: '!pomocAdmin', value: 'Komendy dla administratorów.'}
        ))
    }
    @Command('pomocAdmin')
    async helpAdmin(command: CommandMessage){
        command.reply(new MessageEmbed()
        .setColor('#02468f')
        .setTitle('Dostępne komendy administracyjne:')
        .setThumbnail('https://imgur.com/5gSAi6z.png')
        .addFields(
            {name: '!wycisz :czas :użytkownicy', value: 'Komenda wyciszająca. Czas wyciszenia (dla wszystkich oznaczonych) podajemy w sekundach i potem oznaczamy użytkownków którzy mają być wyciszeni.'},
            {name: '!anulujWyciszenie :użytkownicy', value: 'Anuluje wyciszenie oznaczonych użytkowników.'}
        ))
    }
}