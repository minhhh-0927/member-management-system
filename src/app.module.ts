import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { UserModule } from './components/user';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        UserModule,
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
