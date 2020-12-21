"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_1 = require("@typeit/discord");
const data_1 = require("./src/data");
class Main {
    static get Client() {
        return this._client;
    }
    static async start() {
        this._client = new discord_1.Client();
        this._client.login(data_1.token, `${__dirname}/src/**/*.ts`, `${__dirname}/src/**/*.js`).then(() => this._client.user.setActivity('!pomoc'));
        console.log('Bot has awaken! ^^');
    }
}
Main.start();
//# sourceMappingURL=index.js.map