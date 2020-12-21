"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomFromRange = exports.convertSecondsToTime = void 0;
const convertSecondsToTime = (s) => {
    const hours = Math.floor(s / 3600);
    s %= 3600;
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    return `${hours}:${minutes}:${seconds}`;
};
exports.convertSecondsToTime = convertSecondsToTime;
const randomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.randomFromRange = randomFromRange;
//# sourceMappingURL=util.js.map