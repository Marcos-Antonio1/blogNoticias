import { Application, IRoute, NextFunction, Request, Response } from "express";
import { injectable } from "inversify";
import { getRepository } from "typeorm";
import {NoticiasModel} from '../../models/NoticiasModel';
import { UserModel } from "../../models/UserModel";
import { AbstractController } from "./AbstractController";
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

export class LoginController extends AbstractController{
    protected prefix:string='/login';

    login(){
        return async(req:Request,res:Response,next:NextFunction)=>{
            let User:UserModel|undefined= await UserModel.findOne({login:req.body.login})
            console.log(User)
           if(User){
               if(User.senha === req.body.senha){
                   let id= User.idUser;
                   const token = jwt.sign({ id}, process.env.SECRET, {
                       expiresIn: 3000 // expires in 5min
                     });
                      res.status(200).send({ auth: true, token: token ,usuario:{User} });
               }else{
                   res.send({msg:"senha inválida"})
               }
           }else{
               res.send({msg:"Email não cadastrado"})
           }
            
        }
    } 

    registerRoutes(){
          this.forRoute('').post(this.login()) 
    }
}