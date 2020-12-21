"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSecondsToTime = void 0;
const convertSecondsToTime = (s) => {
    const hours = Math.floor(s / 3600);
    s %= 3600;
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    return `${hours}:${minutes}:${seconds}`;
};
exports.convertSecondsToTime = convertSecondsToTime;
//# sourceMappingURL=util.js.map