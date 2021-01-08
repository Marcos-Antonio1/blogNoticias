import "reflect-metadata";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import {UserModel} from './UserModel';
@Entity()
export class NoticiasModel extends BaseEntity{
    @PrimaryGeneratedColumn()
    idNews?:number;
    @Column()
    titulo?:string;
    @Column()
    noticia?:string;
    @Column()
    imagem?:string;
    @Column({ default: () => `datetime(CURRENT_TIMESTAMP, 'localtime')` })
    public createdAt!:Date
    @Column()
    gostei?:number
    @ManyToOne(()=>UserModel,user=> user.noticias)
    user?:UserModel;

}