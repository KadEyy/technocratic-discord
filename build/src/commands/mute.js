"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mute = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
let Mute = class Mute {
    async mute(command) {
        const mutedUsers = [];
        command.mentions.users.forEach(user => mutedUsers.push(user));
        const ms = parseInt(command.args.ms);
    }
};
tslib_1.__decorate([
    discord_1.Command('wycisz :ms'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], Mute.prototype, "mute", null);
Mute = tslib_1.__decorate([
    discord_1.Discord("!")
], Mute);
exports.Mute = Mute;
//# sourceMappingURL=mute.js.map