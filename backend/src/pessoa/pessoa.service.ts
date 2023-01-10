import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoaService {

  constructor(
    @Inject('PESSOA_REPOSITORY')
    private repository: Repository<Pessoa>,
  ) {}

  create(data: CreatePessoaDto): Promise<Pessoa> {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Pessoa> {

    const pessoa = await this.repository.findOneBy({ id });

    if(!pessoa)
      throw new NotFoundException('Pessoa not found!');

    return pessoa;
  }

  update(id: number, data: UpdatePessoaDto) {
    return this.repository.update(id, data);
  }

  async remove(id: number) {
    return this.repository.remove(await this.findOne(id));
  }
}
