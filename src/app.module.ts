
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TeamModule } from './components/team';
import { UserModule } from './components/user';
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import { DatabaseModule } from './components/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [databaseConfig],
        }),
        UserModule,
        TeamModule,
        DatabaseModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor(
        private connection: Connection,
    ) {
    }
}
