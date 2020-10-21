
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';
import { DatabaseModule } from './components/database/database.module';
import { PositionModule } from './components/position/position.module';
import { TeamModule } from './components/team';
import { UserModule } from './components/user';
import databaseConfig from './config/database.config';

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
