import { Client } from "@typeit/discord";
import {token} from './src/data';

class Main {
    private static _client: Client;

    static get Client(): Client {
        return this._client;
    }

    static async start(){
        this._client = new Client();

        this._client.login(
            token,
            `${__dirname}/src/**/*.ts`,
            `${__dirname}/src/**/*.js`,
        ).then(() => this._client.user.setActivity('!pomoc'));

        console.log('Bot has awaken! ^^')
    }
}
  
Main.start();