import {Container} from 'inversify';
import { Icontroller } from '../Icontroller';
import { IndexController } from '../IndexController';
import { NewsController } from '../NewsController';
import { UserController } from '../UserController';
import ContainerTypes from './containerTypes';

const ControllerContainer= new Container()

ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(IndexController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(UserController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(NewsController)

export default ControllerContainer;