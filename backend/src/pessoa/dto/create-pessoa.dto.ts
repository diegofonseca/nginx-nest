import { IsInt, IsNotEmpty, IsPositive, NotEquals } from "class-validator";

export class CreatePessoaDto {
    @IsNotEmpty()
    @NotEquals("JAO")
    name: string;
}
