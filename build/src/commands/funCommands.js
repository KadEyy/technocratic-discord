"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunCommands = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const util_1 = require("../util");
let FunCommands = class FunCommands {
    async coinflip(command) {
        command.reply(Math.floor(Math.random() * 2) === 0 ? 'orzeł.' : 'reszka.');
    }
    async randomize(command) {
        const min = Math.ceil(parseInt(command.args.od));
        const max = Math.floor(parseInt(command.args.do));
        if (Number.isNaN(min) || Number.isNaN(max)) {
            command.reply('podałeś/aś nieprawidłowy przedział!');
        }
        else {
            command.reply(`\`losowa liczba z przediału to: ${util_1.randomFromRange(min, max)}.\``);
        }
    }
};
tslib_1.__decorate([
    discord_1.Command('rzutMoneta'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], FunCommands.prototype, "coinflip", null);
tslib_1.__decorate([
    discord_1.Command('losujLiczbe :od :do'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], FunCommands.prototype, "randomize", null);
FunCommands = tslib_1.__decorate([
    discord_1.Discord("!")
], FunCommands);
exports.FunCommands = FunCommands;
//# sourceMappingURL=funCommands.js.map