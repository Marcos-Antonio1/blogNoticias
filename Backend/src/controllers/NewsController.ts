import { injectable } from "inversify";
import { AbstractController } from "./AbstractController";

export class NewsController extends AbstractController{
    protected prefix:string='/news';

    hello(){
        return (req:any,res:any,next:any)=>{
            res.send("Hello api 1.0v data news")
        }
    }
    registerRoutes(){
        this.forRoute('').get(this.hello())
    }
}