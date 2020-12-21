"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.announceChannelID = exports.welcomeChannelID = exports.guestRoleID = exports.prefix = exports.token = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
exports.token = process.env.TOKEN;
exports.prefix = '!';
exports.guestRoleID = '790304389826084887';
exports.welcomeChannelID = '790303718872055889';
exports.announceChannelID = '790691679949946921';
//# sourceMappingURL=data.js.map