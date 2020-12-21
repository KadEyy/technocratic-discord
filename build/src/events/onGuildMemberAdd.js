"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGuildMemberAdd = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const data_1 = require("../data");
class onGuildMemberAdd {
    memberJoin([member]) {
        member.roles.add(member.guild.roles.cache.get(data_1.guestRoleID));
        const welcomeChannel = member.guild.channels.cache.get(data_1.welcomeChannelID);
        if (welcomeChannel.isText())
            welcomeChannel.send(`**Witaj na serwerze discord Partii Technokratycznej ${member}!**`);
    }
}
tslib_1.__decorate([
    discord_1.On('guildMemberAdd'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], onGuildMemberAdd.prototype, "memberJoin", null);
exports.onGuildMemberAdd = onGuildMemberAdd;
//# sourceMappingURL=onGuildMemberAdd.js.map