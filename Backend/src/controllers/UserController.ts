import { NextFunction, Request,Response } from "express";
import { injectable } from "inversify";
import { Connection } from "typeorm";
import { NoticiasModel } from "../../models/NoticiasModel";
import { UserModel } from "../../models/UserModel";
import { AbstractController } from "./AbstractController";

export class UserController extends AbstractController{
    protected prefix:string='/user';

    hello(){
        return (req:Request,res:Response,next:NextFunction)=>{
            res.send("Hello api 1.0v data user")
        }
    }
    create(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            let User:UserModel= new UserModel();
            User.nome=req.body.nome;
            User.login=req.body.login;
            User.senha=req.body.senha;
            await User.save()
            res.send({msg:'usuário criado com sucesso'})
        }
    }
    listMynews(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            let user:UserModel|undefined= new UserModel()
            user= await UserModel.findOne({idUser:req.body.id})
            if(user){
                res.status(200).send(user.noticias)
            }
            
        }
    }
     login(){
        return async(req:Request,res:Response,next:NextFunction)=>{
            let User:UserModel|undefined= await UserModel.findOne({login:req.body.login})
            console.log(User)
            if(User?.senha == req.body.senha){
                res.send(`usuário logado seu id é ${User?.idUser}`)
            }else{
                res.send(`usuário inesxistente`)
            }
            
        }
    } 
    createdNews(){
        return async (req:Request,res:Response,next:NextFunction) =>{
            let noticia:NoticiasModel= new NoticiasModel()
            noticia.titulo=req.body.titulo
            noticia.noticia=req.body.noticia
            noticia.imagem=req.body.imagem
            noticia.gostei=0;
            console.log(req)
            try{
                 noticia.save()
                let user:UserModel|undefined= new UserModel()
                user= await UserModel.findOne({idUser:req.body.id})
                user?.noticias?.push(noticia)
                 user?.save()
                res.status(200).send({msg:"Noticia cadastrada com sucesso"})
            }catch(err){
                 res.send({msg: "erro ao criar a noticias"})
            }    
        }
    }
    updateNews(){
        return async (req:Request,res:Response,next:NextFunction) =>{
            let noticia:NoticiasModel|undefined= new NoticiasModel()
            let id=parseInt(req.params.id)
            noticia= await NoticiasModel.findOne({idNews:id})
            if(noticia){
                noticia=NoticiasModel.merge(noticia,req.body)
                noticia.save()
                res.send({msg:"mensagens atualizada com sucesso "})
            }
        }
    }
    registerRoutes(){
        this.forRoute('').get(this.hello())
        this.forRoute('/create').post(this.create())
        this.forRoute('/list').get(this.listMynews())
        /* this.forRoute('/login').post(this.login()) */
        this.forRoute('/create-news').post(this.createdNews())
        this.forRoute('/update-news/:id').put(this.updateNews())

    }
}