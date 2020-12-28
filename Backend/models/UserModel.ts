import "reflect-metadata";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany} from "typeorm";
import {NoticiasModel} from './NoticiasModel';
@Entity()
export class UserModel extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    nome?:string;
    @Column()
    login?:string;
    @Column()
    senha?:string;
    @OneToMany(()=>NoticiasModel,noticias=>noticias.user)
    noticias?:NoticiasModel[]
}