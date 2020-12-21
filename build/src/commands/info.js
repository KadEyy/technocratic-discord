"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const discord_js_1 = require("discord.js");
let Info = class Info {
    async info(command) {
        command.reply(new discord_js_1.MessageEmbed()
            .setColor('#02468f')
            .setTitle('Informacje o bocie.')
            .setThumbnail('https://imgur.com/5gSAi6z.png')
            .setAuthor(command.guild.members.cache.find(member => member.id === '393104366451818506').user.tag)
            .addFields({ name: 'Wersja:', value: '1.1.0' }, { name: 'Github:', value: 'https://github.com/KadEyy/technocratic-discord' }));
    }
};
tslib_1.__decorate([
    discord_1.Command('info'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], Info.prototype, "info", null);
Info = tslib_1.__decorate([
    discord_1.Discord("!")
], Info);
exports.Info = Info;
//# sourceMappingURL=info.js.map