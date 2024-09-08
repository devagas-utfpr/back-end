export class UsuarioVaga {
  constructor(
    public uuid: string,
    public dataEntrada: Date,
    public status: boolean,
    public uuidUsuario: string,
    public uuidVaga: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
