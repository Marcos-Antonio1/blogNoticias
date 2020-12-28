import "reflect-metadata";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import {UserModel} from './UserModel';
@Entity()
export class NoticiasModel extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    titulo?:string;
    @Column()
    noticia?:string;
    @Column()
    imagem?:string;
    @ManyToOne(()=>UserModel,user=> user.noticias)
    user?:UserModel;
}