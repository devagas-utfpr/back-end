# DeVagas - Plataforma de Recrutamento de Desenvolvedores

![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/node.js-v14.17.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-v4.5.4-blue)

## 📝 Sobre

**DeVagas** é uma plataforma web que visa facilitar a conexão entre desenvolvedores e empresas de tecnologia a fim de auxiliar no processo de recrutamento e seleção de novos programadores incríveis! A ferramenta conta com funcionalidades tanto para candidatos quanto para empresas, proporcionando uma experiência eficiente e simplificada.

**Atenção**: A aplicação está sendo hospedada na [Vercel](https://vercel.com/) gratuitamente.

## 🧱 Arquitetura

A aplicação é estruturada seguindo os princípios da **Clean Architecture** e **SOLID**, visando modularidade, testabilidade e fácil manutenção. Portanto, o projeto é baseado em uma arquitetura em camadas. A estrutura é organizada da seguinte maneira:

```plaintext
backend/
├── prisma/
│   ├── migrations/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   ├── repositories/
│   │   └── usecases/
│   ├── infrastructure/
│   │   └── jwt/
│   ├── main/
│   │   ├── config/
│   │   ├── routes/
│   │   └── utils/
│   ├── presentation/
│   │   ├── controllers/
│   │   └── middlewares/
│   ├── app.ts
│   └── server.ts
```

## 📚 Principais Tecnologias e Bibliotecas Utilizadas

<img src="https://skillicons.dev/icons?i=nodejs,ts,express,prisma,postgres,jest,vercel" />

## ❗ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- Yarn
- PostgreSQL

## 📊 Instalação

### 1. Clone o Repositório

```bash
$ git clone https://github.com/devagas-utfpr/back-end.git
$ cd backend
```

### 2. Instale as Dependências

```bash
$ yarn
```

### 3. Configure o Ambiente

Duplique o arquivo `.env.example`, nomeie-o como `.env` e configure as variáveis de ambiente conforme necessário.

### 4. Execute a Aplicação

```bash
$ yarn start
# A aplicação estará disponível em http://localhost:3333
```

## 🚧 Testes

Para rodar os testes, utilize o comando:

```bash
$ yarn test
```

## 📩 Contato

Para mais informações, entre em contato conosco:

GitHub: https://github.com/devagas-utfpr

Agradecemos por usar o **DeVagas** 💙 Juntos, vamos facilitar o recrutamento de desenvolvedores talentosos!
