import { Application, IRoute, NextFunction, Request, Response } from "express";
import { injectable } from "inversify";
import { getRepository } from "typeorm";
import {NoticiasModel} from '../../models/NoticiasModel';
import { AbstractController } from "./AbstractController";

export class IndexController extends AbstractController{
    protected prefix:string='/';

    hello(){
        return (req:Request,res:Response,next:NextFunction)=>{
            res.send("Hello api 1.0v")
        }
    }
    listNews(){
        return async (req:Request,res:Response,next:NextFunction)=>{
           let data= await NoticiasModel.find()
            res.send(data)
        }
    }
    searchNews(){
        return  async (req:Request,res:Response,next:NextFunction)=>{
            var data = await getRepository(NoticiasModel)
            .createQueryBuilder("noticias")
            .where("noticias.titulo like :name", { name:`%${req.body.name}%` })
            .getMany();
            res.send(data)
        }
    }
    liked(){
        return  async (req:Request,res:Response,next:NextFunction)=>{
            var news:NoticiasModel| undefined= new NoticiasModel()
            let id= parseInt(req.params.id)
            news =  await NoticiasModel.findOne({idNews:id})
            if(news?.gostei !=undefined ){
                news.gostei= news.gostei+1;
                news.save()
                res.status(200).send({msg:'ok'})
            }
        }
    }
    detailNews(){
        return  async (req:Request,res:Response,next:NextFunction)=>{
            var news:NoticiasModel| undefined= new NoticiasModel()
            let id= parseInt(req.params.id)
            news =  await NoticiasModel.findOne({idNews:id})
            res.send(news)
        }
    }

    registerRoutes(){
        this.forRoute('').get(this.hello())
        this.forRoute('list-all').get(this.listNews())
        this.forRoute('search').get(this.searchNews())
        this.forRoute('liked/:id').get(this.liked())
        this.forRoute('detail-news/:id').get(this.detailNews())
    }
}