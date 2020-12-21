"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Help = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const discord_js_1 = require("discord.js");
let Help = class Help {
    async help(command) {
        command.reply(new discord_js_1.MessageEmbed()
            .setColor('#02468f')
            .setTitle('Dostępne komendy:')
            .setThumbnail('https://imgur.com/5gSAi6z.png')
            .addFields({ name: '!ping', value: 'Zobacz czy bot ci odpowie!' }, { name: '!info', value: 'Podstawowe informacje o bocie.' }, { name: '!socialsy', value: 'Wszystkie social media partii i projektu Ad Personam.' }, { name: '!rzutMoneta', value: 'Orzeł czy reszka? :thinking:' }, { name: '!losujLiczbe :od :do', value: 'Losuj liczbę z podanego przedziału!' }, { name: '!pomocAdmin', value: 'Komendy dla administratorów.' }));
    }
    async helpAdmin(command) {
        command.reply(new discord_js_1.MessageEmbed()
            .setColor('#02468f')
            .setTitle('Dostępne komendy administracyjne:')
            .setThumbnail('https://imgur.com/5gSAi6z.png')
            .addFields({ name: '!wycisz :czas :użytkownicy', value: 'Komenda wyciszająca. Czas wyciszenia (dla wszystkich oznaczonych) podajemy w sekundach i potem oznaczamy użytkownków którzy mają być wyciszeni.' }, { name: '!anulujWyciszenie :użytkownicy', value: 'Anuluje wyciszenie oznaczonych użytkowników.' }));
    }
};
tslib_1.__decorate([
    discord_1.Command('pomoc'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], Help.prototype, "help", null);
tslib_1.__decorate([
    discord_1.Command('pomocAdmin'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], Help.prototype, "helpAdmin", null);
Help = tslib_1.__decorate([
    discord_1.Discord("!")
], Help);
exports.Help = Help;
//# sourceMappingURL=help.js.map