
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { UserModule } from './components/user';
import { TeamModule } from './components/team';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        UserModule,
        TeamModule
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
