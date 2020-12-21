"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordBot = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const path_1 = tslib_1.__importDefault(require("path"));
const data_1 = require("./data");
let DiscordBot = class DiscordBot {
    ping(command) {
        command.reply("pong!");
    }
    notFoundA(commad) {
        commad.reply('Nie znaleziono takiej komendy!');
    }
};
tslib_1.__decorate([
    discord_1.Command("ping"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordBot.prototype, "ping", null);
tslib_1.__decorate([
    discord_1.CommandNotFound(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordBot.prototype, "notFoundA", null);
DiscordBot = tslib_1.__decorate([
    discord_1.Discord(data_1.prefix, {
        import: [
            path_1.default.join(__dirname, 'events', '*.ts'),
            path_1.default.join(__dirname, 'commands', '*.ts')
        ]
    })
], DiscordBot);
exports.DiscordBot = DiscordBot;
//# sourceMappingURL=bot.js.map