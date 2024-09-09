export class Vaga {
  constructor(
    public uuid: string,
    public titulo: string,
    public descricao: string,
    public status: boolean,
    public modalidade: number,
    public dataInicio: Date,
    public dataFim: Date,
    public uuidEmpresa: string,
    public uuidCargo: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
