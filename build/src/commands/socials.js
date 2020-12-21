"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socials = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const discord_js_1 = require("discord.js");
let Socials = class Socials {
    async socials(command) {
        command.reply(new discord_js_1.MessageEmbed()
            .setColor('#02468f')
            .setTitle('Społeczności:')
            .setThumbnail('https://imgur.com/5gSAi6z.png')
            .addFields({ name: 'Nasza strona:', value: 'https://partiatechnokraci.online/' }, { name: 'Nasz fanpage na FB:', value: 'https://www.facebook.com/partiatechnokratyczna/' }, { name: 'Grupa Ad Personam/Debatawka:', value: 'https://pl-pl.facebook.com/groups/323110278650861/' }, { name: 'Fanpage Ad Personam:', value: 'https://www.facebook.com/Ad-Personam-101684234829001/' }, { name: 'Discord Ad Personam:', value: 'https://discord.gg/pDru7pb' }, { name: 'YouTube Ad Personam:', value: 'https://www.youtube.com/channel/UCsD5AgWL08EinVvVs7-GkBQ' }));
    }
};
tslib_1.__decorate([
    discord_1.Command('socialsy'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], Socials.prototype, "socials", null);
Socials = tslib_1.__decorate([
    discord_1.Discord("!")
], Socials);
exports.Socials = Socials;
//# sourceMappingURL=socials.js.map