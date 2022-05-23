# Ligeirex-entregas
<p align="center">
  <img src="src/img/logo.png">
  <br/>
</p>

### Projeto online
Este projeto já está em ambiente de produção, com documentação (rota: https://api-ligeirex-delivery.herokuapp.com/doc) e tudo funcionando perfeitamente!

você pode encontra-lo aqui: https://api-ligeirex-delivery.herokuapp.com/

### Instalando o projeto
Caso queira testa-lo em sua máquina, siga os passos abaixo:

**Clone este Repositorio**

```
$ git clone https://github.com/LucasMSCaetano/Ligeirex-Deliveries.git

$ cd Ligeirex-Deliveries.git
```
**Crie as variáveis de ambiente**
```
crie no diretorio raiz o arquivo .env, segue um exemplo de como criar o arquivo via cmd (windows)

$ copy con .env
$ cd .env

agora sete as variáveis de ambiente conforme as abaixo:

DATABASE_URL=
APP_NAME=
PORT=

```
**Instale as dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

**Agora basta executar o comando**

```
$ npm run dev
```


