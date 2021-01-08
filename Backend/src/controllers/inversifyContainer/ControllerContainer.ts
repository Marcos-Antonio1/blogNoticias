import {Container} from 'inversify';
import { Icontroller } from '../Icontroller';
import { IndexController } from '../IndexController';
import { UserController } from '../UserController';
import ContainerTypes from './containerTypes';

const ControllerContainer= new Container()

ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(IndexController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(UserController)

export default ControllerContainer;