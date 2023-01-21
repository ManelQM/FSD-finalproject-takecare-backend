# FSD-TakeCare-Backend

## Abstract 
This project is a part of a full App designed as the last final project of the Bootcamp FSD on GeeksHubs Academy. As the title suggest this repo is a API connected to a DataBase. 

In this case the idea is to create the space through this APP for Caregivers of elderlys, childern, disabled people,etc. The main intention is to provide a centralized spot where this kind of services (customers/workers) can have a place for make offers as customers or as caregivers giving light,help and presence inside the market for this services. 

---

## DDBB Design

The DDBB architecture is focused in the following relationships; 

* One to Many --> User belongs to Role
* One to Many --> Publications belongs to User
* Many to Many --> Between User and Services through Contracts

## Relationship Diagram 
![DB](./img/db.png)

## Technologies 

![JS](./img/logo-javascript-logo-png-transparentj.png)
![Docker](./img/docker-ar21%20(1)%20(2).svg)
![Express](./img/expressjs-ar21%20(1)%20(1).svg)
![Sequelize](./img/sequelizejs-ar21%20(1)%20(1).svg)
![Node.js](./img/nodejs-horizontal%20(1).svg)
![MySQL](./img/mysql-ar21%20(1)%20(1).svg)


## Deployment

BDDD and Api are full deployed on railway.
[ApiLink]("fsdtakecare-backend-production.up.railway.app")

If its desire users can reproduce the same conditions clone this repo [GitHub]("https://github.com/ManelQM/FSDtakecare-backend.git"). 

Our API needs to be connected in some PORT. For that we use Docker. First of all install in your computer Docker Desktop. After that write in your console the next command: 

* docker run -d -p 3306:3306 --name mysql

 After clone the repo in your computer put in your console "npm i" for a full performance with all the dependencies installed. 

 Next to this user needs to have installed MySQL workbench to reproduce the database. After that, write in the console this commands: 
 
 * sequelize db:migrate ---> clone the database architecture. Tables, relationships and fields. 

 * sequelize db:seed:all ---> clone all the hardcoded data. This is things like users, publications, services, reproducing the APP working with fake users. 


## API performance

The API works as a backend architecture for the front service experience but if you are only looking how this works here is an explanation. 
The code is a recreation of the typical package of actions that are implemented in any APP. Users have a role,profile, can see publicacions, can create publications, cand make contracts between others users publication, etc. Of course anyone can do actions as login or register. 

## List of Endpoints

### Login
* POST - log user with email and password
### Register
* POST - Register new user asking for name,surname,nickname,email and password. 

### Users requests
* GET - My profile 
* PATCH - Update user
### Publications requests
* GET - All publications
* GET - My Publications
* PATCH - Update publication
* POST - Create publication
* DELETE - Delete publication
 
### Contracts
* POST - Create contract
* GET - Get all contracts
* GET - My contracts
* DELETE - Contracts 
