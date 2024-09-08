export class VagaRequisito {
  constructor(
    public uuid: string,
    public uuidVaga: string,
    public uuidRequisito: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
