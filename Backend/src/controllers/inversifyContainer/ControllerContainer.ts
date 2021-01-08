import {Container} from 'inversify';
import { Icontroller } from '../Icontroller';
import { IndexController } from '../IndexController';
import { LoginController } from '../LoginController';
import { UserController } from '../UserController';
import ContainerTypes from './containerTypes';

const ControllerContainer= new Container()

ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(IndexController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(UserController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(LoginController)

export default ControllerContainer;