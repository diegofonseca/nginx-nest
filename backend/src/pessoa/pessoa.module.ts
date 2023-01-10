import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { pessoasProviders } from './pessoa.provider';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [PessoaController],
  providers: [
    ...pessoasProviders,
    PessoaService,
  ]
})
export class PessoaModule {}
