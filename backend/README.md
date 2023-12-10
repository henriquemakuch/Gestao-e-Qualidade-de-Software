# Documentação da API Backend Node.js com Express

## Introdução

Documentação da API Backend desenvolvida em Node.js com Express. Esta API oferece endpoints para interação com entidades de "Pessoas" e "Empresas".

## Como Usar

### Requisitos

Certifique-se de ter o Node.js e o npm instalados em seu ambiente.

### Instalação

1. Clone este repositório;
2. Navegue até o diretório do projeto: `cd backend`
3. Instale as dependências: `npm install`

### Execução

Inicie o servidor com o seguinte comando:

```bash
npm start
```

O servidor será iniciado na porta padrão 3000.

## Endpoints

### Pessoas

#### 1. Criar Pessoa

- **Método HTTP**: `POST`
- **Rota**: `/api/pessoas`
- **Corpo da Solicitação**:

```json
{
  "nome": "Nome da Pessoa",
  "idade": 25,
  "email": "pessoa@example.com"
}
```

#### 2. Obter Todas as Pessoas

- **Método HTTP**: `GET`
- **Rota**: `/api/pessoas`
- **Resposta de Exemplo**:

```json
[
  {
    "id": 1,
    "nome": "Nome da Pessoa 1",
    "idade": 25,
    "email": "pessoa1@example.com"
  },
  {
    "id": 2,
    "nome": "Nome da Pessoa 2",
    "idade": 30,
    "email": "pessoa2@example.com"
  }
]
```

#### 3. Obter Pessoa por ID

- **Método HTTP**: `GET`
- **Rota**: `/api/pessoas/:id`
- **Parâmetros da Consulta**: `id` (ID da Pessoa)
- **Resposta de Exemplo**:

```json
{
  "id": 1,
  "nome": "Nome da Pessoa 1",
  "idade": 25,
  "email": "pessoa1@example.com"
}
```

#### 4. Excluir Pessoa por ID

- **Método HTTP**: `DELETE`
- **Rota**: `/api/pessoas/:id`
- **Parâmetros da Consulta**: `id` (ID da Pessoa)
- **Resposta de Exemplo**:

```json
{
  "mensagem": "Pessoa excluída com sucesso."
}
```

### Empresas

#### 1. Criar Empresa

- **Método HTTP**: `POST`
- **Rota**: `/api/empresas`
- **Corpo da Solicitação**:

```json
{
  "nome": "Nome da Empresa",
  "cnpj": "12345678901234",
  "endereco": "Rua da Empresa, 123"
}
```

#### 2. Obter Todas as Empresas

- **Método HTTP**: `GET`
- **Rota**: `/api/empresas`
- **Resposta de Exemplo**:

```json
[
  {
    "id": 1,
    "nome": "Nome da Empresa 1",
    "cnpj": "12345678901234",
    "endereco": "Rua da Empresa 1, 123"
  },
  {
    "id": 2,
    "nome": "Nome da Empresa 2",
    "cnpj": "56789012345678",
    "endereco": "Rua da Empresa 2, 456"
  }
]
```

#### 3. Obter Empresa por ID

- **Método HTTP**: `GET`
- **Rota**: `/api/empresas/:id`
- **Parâmetros da Consulta**: `id` (ID da Empresa)
- **Resposta de Exemplo**:

```json
{
  "id": 1,
  "nome": "Nome da Empresa 1",
  "cnpj": "12345678901234",
  "endereco": "Rua da Empresa 1, 123"
}
```

#### 4. Excluir Empresa por ID

- **Método HTTP**: `DELETE`
- **Rota**: `/api/empresas/:id`
- **Parâmetros da Consulta**: `id` (ID da Empresa)
- **Resposta de Exemplo**:

```json
{
  "mensagem": "Empresa excluída com sucesso."
}
```

