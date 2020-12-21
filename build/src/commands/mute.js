"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mute = exports.muted = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const util_1 = require("../util");
const data_1 = require("../data");
exports.muted = {};
let Mute = class Mute {
    async mute(command) {
        if (!command.member.hasPermission('ADMINISTRATOR')) {
            command.reply('nie masz uprawnień by używać tej komendy!');
        }
        else {
            const s = parseInt(command.args.s);
            if (Number.isNaN(s)) {
                command.reply('nie podałeś czasu wyciszenia!');
            }
            else {
                const announceChannel = command.guild.channels.cache.get(data_1.announceChannelID);
                const since = new Date().getTime();
                const time = util_1.convertSecondsToTime(s);
                command.mentions.users.forEach(user => {
                    if (announceChannel.isText())
                        announceChannel.send(`**${user} zostajesz wyciszony na **\`${time}\`** przez ${command.author} - możesz spytać go o powód w prywatenej wiadomości.**`);
                    exports.muted[user.id] = { since: since, for: s * 1000 };
                });
            }
        }
    }
    async unmute(command) {
        if (!command.member.hasPermission('ADMINISTRATOR')) {
            command.reply('nie masz uprawnień by używać tej komendy!');
        }
        else {
            command.mentions.users.forEach(user => exports.muted[user.id] = null);
        }
    }
};
tslib_1.__decorate([
    discord_1.Command('wycisz :s'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], Mute.prototype, "mute", null);
tslib_1.__decorate([
    discord_1.Command('anulujWyciszenie'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], Mute.prototype, "unmute", null);
Mute = tslib_1.__decorate([
    discord_1.Discord("!")
], Mute);
exports.Mute = Mute;
//# sourceMappingURL=mute.js.map