export class Usuario {
  constructor(
    public uuid: string,
    public nome: string,
    public cpf: string,
    public email: string,
    public dataNascimento: Date,
    public senha: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}