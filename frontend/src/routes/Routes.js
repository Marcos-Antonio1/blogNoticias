import { Timeline } from "antd";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdmStage from "../screens/AdmStage/AdmStage";
import CriarAdm from "../screens/CreateAdmin/CreateAdmin";
import criarAdm from "../screens/CreateAdmin/CreateAdmin";
import Login from "../screens/Login/Login";
import RegisterNews from "../screens/RegisterNews/RegisterNews";
import TimeLine from '../screens/timeLine/TimeLine'
import UpdateNews from "../screens/UpdateNews/updateNews";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={TimeLine} />
      <Route path="/Login" component={Login} />
      <Route path="/Adm" component={AdmStage} />
      <Route path='/registerNews'component={RegisterNews}></Route>
      <Route path='/updateNews' component={UpdateNews}></Route>
      <Route path='/creatAdmin' component={CriarAdm}></Route>
      </Router>
  );
}

