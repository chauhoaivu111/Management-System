import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {Link} from "react-router-dom"
const ListItem1 = ()=>{
      return(
           
  <div>
    <Link to='/Management'>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="Management" />
    </ListItem>
    </Link>
    
    <Link to='/Report'>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Report Licenes" />
    </ListItem>
    </Link>
    
    <Link to='/Login'>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon/>
      </ListItemIcon >
      <ListItemText primary="Logout" />
    </ListItem>
    </Link>
    
   
  </div>
);
 
      
}

export default ListItem1;