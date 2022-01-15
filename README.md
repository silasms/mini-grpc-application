# ESCLARECIMENTOS DO CÓDIGO

Pequeno servidor de login, utilizando gRPC para fazer os microsserviços e rest api para o servidor externo

## 1. Linguagem e libs utilizadas:

*  Javascript
*  NodeJS
*  express
*  gRPC
*  
*  proto-loader
*  jwt
*  mongoose
*  mongoDb
*  bcrypt

## 2. Instalando o projeto:

Faça uma cópia do repositório do github: https://github.com/silasms/mini-grpc-application

```
$ git clone https://github.com/silasms/mini-grpc-application
```

Posteriormente, execute o gerenciador de pacotes npm para a instalação das libs:
```
$ npm i
```

Ao final, o microsserviço está na pasta lion
```
$ cd lion
$ npm run dev
```
Pronto o microsserviço está inicializado.<br>
Agora precisamos iniciar o servidor rest.<br>
Entraremos na pasta api e executaremos o servidor.
```
$ cd api
$ npm run dev
```
Pronto. Tudo certo.

## 3. Funcionalidades:

A partir da url: 127.0.0.1:3333<br>
Teremos rotas post e get.<br>
<br>
127.0.0.1:3333/signup -> POST : Rota destinada a registro do usuário<br>
O uso dessa rota necessita o nome(name), email(email), senha(password). Para criar o usuário<br>
<br>
127.0.0.1:3333/list -> GET : Rota para a listagem dos usuários cadastrados no sistema<br>
<br>
127.0.0.1:3333/signin -> POST : Rota feita para o login<br>
O uso dessa rota precisa dos dados nome(name), senha(password). Para fazer o login<br>

## 4. Observações:

Foi utilizado algumas tecnologias voltado para a segurança do usuário, como a criptografia dos dados. Tudo isso pra trazer credibilidade á aplicação