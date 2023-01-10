import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from './pessoa/pessoa.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { PessoaController } from './pessoa/pessoa.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'fullcycle',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PessoaModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
