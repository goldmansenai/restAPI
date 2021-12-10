# RestAPI

<img src="https://img.shields.io/badge/Versão-v1.0.0-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Backend-Node-important?style=for-the-badge" />

> RestAPI documentada com swagger

Projeto feito em NodeJS junto do MySQL para o banco de dados que busca mostrar como funciona uma API com verbos HTTP GET, POST, PUT e DELETE e como documentá-la com o swagger

---

## Tecnologias

O projeto em questão utilizas as seguintes dependências e tecnologias: 

* <img src="https://img.shields.io/badge/Tecnologia-NodeJS-important?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Tecnologia-MySQL Workbench-important?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Express-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Cors-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Body-Parser-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-JWT-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-MySQL2-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Nodemon-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Sequelize-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Sequelize-cli-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Swagger-jsdoc-blue?style=for-the-badge"/>
* <img src="https://img.shields.io/badge/Dependência-Swagger-ui-express-blue?style=for-the-badge"/>

## Instalação

Clone o projeto em um repositório de sua escolha
```
git clone https://github.com/goldmansenai/restAPI
```

Acessa a pasta do projeto e instale as dependências
```
cd restAPI && npm install
```

Rode o projeto com o VsCode
```
code .
```

E em seguida abra o seu MySQL Workbench (caso não o tenha, você pode baixá-lo <a href="https://dev.mysql.com/downloads/workbench/
" target="_blank">aqui</a>) e crie seu esquema a partir das instruções abaixo

<p>Passo 1:</p>
<img src="./assets/mysql/mysql1.png"/>
<p>Passo 2:</p>
<img src="./assets/mysql/mysql2.png"/>
<p>Passo 3:</p>
<img src="./assets/mysql/mysql3.png"/>
<p>Passo 4:</p>
<img src="./assets/mysql/mysql4.png"/>
<p>Passo 5:</p>
<img src="./assets/mysql/mysql5.png"/>
<p>Passo 6:</p>
<img src="./assets/mysql/mysql6.png"/>

Com o banco conectado, no terminal (Ctrl + Shift + ') digite npm run start
```
npm run start
```

Assim que seu servidor estiver rodando, você pode ir em localhost:3001/api-docs

---

## Utilização
<p>Página Inicial:</p>
<img src="./assets/swagger/api-docs.PNG"/>
<p>Register:</p>
<img src="./assets/swagger/register.PNG"/>
<p>Login:</p>
<img src="./assets/swagger/login.PNG"/>
<p>GET:</p>
<img src="./assets/swagger/get.PNG"/>
<p>GET (1 Post):</p>
<img src="./assets/swagger/getOne.PNG"/>
<p>POST:</p>
<img src="./assets/swagger/post.PNG"/>
<p>PUT:</p>
<img src="./assets/swagger/put.PNG"/>
<p>DELETE:</p>
<img src="./assets/swagger/delete.PNG"/>
---

## Autores

* *Camili Martins*
* *Emelly Costa*
* *Patricia Soares*
* *Thiago Amorim*
* *Victor Gomes*
* *Vinícius Sanches*