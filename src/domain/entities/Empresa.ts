export class Empresa {
  constructor(
    public uuid: string,
    public nome: string,
    public cnpj: string,
    public email: string,
    public cidade: number,
    public senha: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
