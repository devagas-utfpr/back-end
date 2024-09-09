-- CreateTable
CREATE TABLE "Cargo" (
    "uuid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "uuid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cidade" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Requisito" (
    "uuid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Requisito_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "uuid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "UsuarioVaga" (
    "uuid" TEXT NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "uuidUsuario" TEXT NOT NULL,
    "uuidVaga" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsuarioVaga_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Vaga" (
    "uuid" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "modalidade" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "uuidEmpresa" TEXT NOT NULL,
    "uuidCargo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vaga_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "VagaRequisito" (
    "uuid" TEXT NOT NULL,
    "uuidVaga" TEXT NOT NULL,
    "uuidRequisito" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VagaRequisito_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_email_key" ON "Empresa"("email");

-- CreateIndex
CREATE INDEX "Empresa_email_idx" ON "Empresa"("email");

-- CreateIndex
CREATE INDEX "Empresa_cnpj_idx" ON "Empresa"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "Usuario_email_idx" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "Usuario_cpf_idx" ON "Usuario"("cpf");

-- CreateIndex
CREATE INDEX "UsuarioVaga_uuidUsuario_idx" ON "UsuarioVaga"("uuidUsuario");

-- CreateIndex
CREATE INDEX "UsuarioVaga_uuidVaga_idx" ON "UsuarioVaga"("uuidVaga");

-- AddForeignKey
ALTER TABLE "UsuarioVaga" ADD CONSTRAINT "UsuarioVaga_uuidUsuario_fkey" FOREIGN KEY ("uuidUsuario") REFERENCES "Usuario"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioVaga" ADD CONSTRAINT "UsuarioVaga_uuidVaga_fkey" FOREIGN KEY ("uuidVaga") REFERENCES "Vaga"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_uuidEmpresa_fkey" FOREIGN KEY ("uuidEmpresa") REFERENCES "Empresa"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_uuidCargo_fkey" FOREIGN KEY ("uuidCargo") REFERENCES "Cargo"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VagaRequisito" ADD CONSTRAINT "VagaRequisito_uuidVaga_fkey" FOREIGN KEY ("uuidVaga") REFERENCES "Vaga"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VagaRequisito" ADD CONSTRAINT "VagaRequisito_uuidRequisito_fkey" FOREIGN KEY ("uuidRequisito") REFERENCES "Requisito"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
