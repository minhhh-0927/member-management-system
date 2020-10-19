
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { PositionModule } from './components/position/position.module';
import { TeamModule } from './components/team';
import { UserModule } from './components/user';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        UserModule,
        TeamModule,
        PositionModule,
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
