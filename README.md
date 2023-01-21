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

 After clone the repo in your computer put in your console "npm i" for a full performance with all the dependencies installed. 

 Next you can reproduce the database with this commands:

 * 