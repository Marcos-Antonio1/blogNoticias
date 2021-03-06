import { Icontroller } from "./src/controllers/Icontroller";
import { IndexController } from "./src/controllers/IndexController";
import ControllerContainer from "./src/controllers/inversifyContainer/ControllerContainer";
import ControllerTypes from "./src/controllers/inversifyContainer/containerTypes";
import 'reflect-metadata'; 
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
import { createConnection } from "typeorm";


var express = require('express');
var path = require('path');
var cors =require('cors')
var app = express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

createConnection();

const controllers:Icontroller[]=ControllerContainer.getAll<Icontroller>(ControllerTypes.Controller);
controllers.forEach(controller =>{
    controller.forApp(app).registerRoutes() 
})
module.exports = app;
