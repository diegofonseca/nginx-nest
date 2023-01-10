import { DataSource } from 'typeorm';
import { Pessoa } from './entities/pessoa.entity';

export const pessoasProviders = [
  {
    provide: 'PESSOA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pessoa),
    inject: ['DATA_SOURCE'],
  },
];