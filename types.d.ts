import { Collection } from 'discord.js';

declare module 'discord.js' {
  export interface Client {
    // eslint-disable-next-line
    commands: Collection<any, any>;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      BOT_TOKEN: string;
      BOT_OWNER_ID: string;
      CLIENT_ID: string;
      GUILD_ID: string;

      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_NAME: string;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string;
    }
  }
}
