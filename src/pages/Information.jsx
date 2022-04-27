import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem1 from "../components/listItem1";
import MainListItems from "../components/listItem";
import G from "../components/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import motorbike from "../components/icons/motorbikebike.jpg";
import motorbikeOut from "../components/icons/motorbikeout.png";
import motorbikeIn from "../components/icons/motorbikeIN.jpg";
import Author from "../components/Author";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  // added the footer class
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    // just this item, push to bottom
    alignSelf: "flex-end",
  },
}));

export default function Information() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        style= {{backgroundColor:"	#8000ff"}}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Information Parking
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MainListItems />
        </List>
        <Divider />
        <List>
          <ListItem1 />
        </List>


        <Divider />

        <Author/>
        


        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Paper>
            <div style={{ height: "600px" }}>
              <G col={4} gap={20}>
                
                <Link to ="/InparkingPage">
                <div
                  style={{
                    height: "400px",
                    cursor: "pointer",
                    textAlign: "center",
                    justifyContent: "center",
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                >
                  <img
                    src={motorbikeIn}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div
                    style={{
                      backgroundColor: "#ccfff2",
                      minHeight: "50px",
                      justifyContent: "center",
                      justifyItems: "center",
                      textAlign: "center",
                      width: "90%",
                      justifySelf: "center",
                      marginLeft: "12px",
                    }}
                  >
                    <p style={{ paddingTop: "10px" }}>30</p>
                    <p>In Parking</p>
                    <Button>
                      More Infor <ArrowForwardIcon />
                    </Button>
                  </div>
                </div>
                </Link>
              

                <Link to ="/OutparkingPage" >
                <div
                  style={{
                    height: "400px",
                    cursor: "pointer",
                    textAlign: "center",
                    justifyContent: "center",
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                >
                  <img
                    src={motorbikeOut}
                    style={{ width: "95%", height: "93%", marginTop: "13px" }}
                  />
                  <div
                    style={{
                      backgroundColor: "#b4f7ff",
                      minHeight: "50px",
                      justifyContent: "center",
                      justifyItems: "center",
                      textAlign: "center",
                      width: "90%",
                      justifySelf: "center",
                      marginLeft: "15px",
                      marginTop: "15px",
                    }}
                  >
                    <p style={{ paddingTop: "10px" }}>30</p>
                    <p>Out Parking</p>
                    <Button>
                      More Infor <ArrowForwardIcon />
                    </Button>
                  </div>
                </div>
                </Link>
                <Link to ="/ParkingPage">

                <div
                  style={{
                    height: "400px",
                    cursor: "pointer",
                    textAlign: "center",
                    justifyContent: "center",
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                >
                  <img
                    src={motorbike}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div
                    style={{
                      backgroundColor: "#afd7d0",
                      minHeight: "50px",
                      justifyContent: "center",
                      justifyItems: "center",
                      textAlign: "center",
                      width: "90%",
                      justifySelf: "center",
                      marginLeft: "15px",
                    }}
                  >
                    <p style={{ paddingTop: "10px" }}>60</p>
                    <p>All motorbike</p>
                    <Button>
                      More Infor <ArrowForwardIcon />
                    </Button>
                  </div>
                </div>
                </Link>
              </G>
            </div>
          </Paper>
        </Container>
        {/* <Copyright /> */}
      </main>
    </div>
  );
}
