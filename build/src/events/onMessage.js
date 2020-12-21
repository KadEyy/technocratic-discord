"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGuildMemberAdd = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const util_1 = require("../util");
const mute_1 = require("../commands/mute");
class onGuildMemberAdd {
    message([message]) {
        const time = new Date().getTime();
        const mutedUser = mute_1.muted[message.author.id] ? mute_1.muted[message.author.id] : false;
        if (mutedUser && mutedUser.since + mutedUser.for > time && !message.member.hasPermission('ADMINISTRATOR')) {
            message.delete();
            message.author.send(`**Zostałeś wyciszony na serwerze Partii Technokratów, pozostały czas wyciszenia to** \`${util_1.convertSecondsToTime(Math.floor((mutedUser.since + mutedUser.for - time) / 1000))}\`**.**`);
        }
    }
}
tslib_1.__decorate([
    discord_1.On('message'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], onGuildMemberAdd.prototype, "message", null);
exports.onGuildMemberAdd = onGuildMemberAdd;
//# sourceMappingURL=onMessage.js.map