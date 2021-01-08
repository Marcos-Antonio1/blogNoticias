import "reflect-metadata";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany, getManager} from "typeorm";
import {NoticiasModel} from './NoticiasModel';
@Entity()
export class UserModel extends BaseEntity{
    @PrimaryGeneratedColumn()
    idUser?:number;
    @Column()
    nome?:string;
    @Column()
    login?:string;
    @Column()
    senha?:string;
    @OneToMany(()=>NoticiasModel,noticias=>noticias.user,{
        eager: true
    })
    noticias?:NoticiasModel[]
}