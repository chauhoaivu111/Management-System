import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
import Information from "../pages/Information"
import Views from "../pages/Views";
import Management from "../pages/Management";
import Report from "../pages/Report";
import InparkingPage from "../pages/InparkingPage";
import OutparkingPage from "../pages/OutparkingPage";
import ParkingPage from "../pages/ParkingPage";
import Addpage from "../pages/Addpage";


const Routes = () => {
  return (
    <Switch>
    
      <Route path="/Login" exact component={Login} />
      <Route path="/Register" component={Register} />
      {/* <Route path="/" exact component={Dashboard}/> */}
      <Route path="/" exact  component={Information}/>
      <Route path="/Views" component={Views}/>
      <Route path="/Management" component={Management}/>
      <Route path="/Report" component={Report}/>
      <Route path="/InparkingPage" component={InparkingPage}/>
      <Route path="/OutparkingPage" component={OutparkingPage}/>
      <Route path = "/ParkingPage" component={ParkingPage}/>
      <Route path = "/Addpage" component={Addpage}/>
      
  
    </Switch>
  );
};

export default Routes;