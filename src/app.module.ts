
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { PositionModule } from './components/position/position.module';
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
        PositionModule,
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
