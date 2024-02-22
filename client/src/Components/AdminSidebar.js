import Box from "@mui/material/Box"
import {  AppBar, Toolbar, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
// import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import LayersIcon from '@mui/icons-material/Layers';
import logo from "./images/logo.svg"
// import ErrorPage from "../Pages/ErrorPage";
// import AdminWelcome from "./AdminWelcome";
// import AdminBlogs from "../Pages/AdminBlogs";

const AdminSidebar = () => {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    let params = useParams();

    console.log(params);

    const [selectedIndex, setSelectedIndex] = useState(params.menu === "home" ? 0 : params.menu === "notes" ? 1 : params.menu === "related-works" ? 2 : params.menu === "settings" ? 3 : 0 );
    // const [expand, setExpand] = useState(false);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handleListItemClick = (val, index) => {
        setSelectedIndex(index);
        navigate(`/admin/${val}`);
        toggleDrawer("left", false);
    };
    function handleLogoutClick() {
        localStorage.setItem('loggedIn', JSON.stringify(false)); 
        navigate("/admin/login")
    }

    const menu = <Box
        sx={{
            // background: "pink",
            width: "90%",
            margin: "auto",
            paddingTop: "20px",
            height: "100%"
        }}
    >
        <Box
            sx={{
                background: "#edeff1",
                width: "90%",
                margin: "auto",
                padding: "12px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "12px",
                marginBottom: "12px",
            }}
        >
            <img src={logo} alt="" />
        </Box>
        
        <Box sx={{ width: '100%', fontSize: "20px", }} onClick={toggleDrawer("left", false)} onKeyDown={toggleDrawer("left", false)}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    sx={{ borderRadius: "6px" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick("blogs", 1)}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <BookIcon sx={{fontSize: '20px', color: "gray"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Blogs" primaryTypographyProps={selectedIndex === 1 ? {fontSize: '14px', fontWeight: 600, color: "#edeff1"} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                <ListItemButton
                    sx={{ borderRadius: "6px" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick("projects", 2)}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <LayersIcon sx={{fontSize: '20px', color: "gray"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Projects" primaryTypographyProps={selectedIndex === 2 ? {fontSize: '14px', fontWeight: 600, color: "#edeff1"} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                
            </List>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    sx={{ borderRadius: "6px" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick("settings", 3)}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <SettingsIcon sx={{fontSize: '20px', color: "gray"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" primaryTypographyProps={selectedIndex === 3 ? {fontSize: '14px', fontWeight: 600, color: "#edeff1"} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                <ListItemButton
                    sx={selectedIndex === 4 ? { borderRadius: "6px", background: "#edeff1" } : { borderRadius: "6px" }}
                    selected={selectedIndex === 4}
                    onClick={handleLogoutClick}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <LogoutIcon sx={{fontSize: '20px', color: "gray"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" primaryTypographyProps={selectedIndex === 4 ? {fontSize: '14px', fontWeight: 600, color: "#edeff1"} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                
            </List>
            
        </Box>
    </Box>

    // const display = () => {
    //     params = params.menu
    //     if(params === "home"){
    //         return <AdminWelcome />
    //     }else if(params === "blogs"){
    //         return <AdminBlogs />
    //     }else if(params === "project"){
    //         // return <AdminProjects />
    //     }else if(params === "settings"){
    //         // return <AdminSettings />
    //     }else if(params === "logout"){
    //         // return <Dashboard />
    //     }else{
    //         return <ErrorPage home={true}/>
    //     }
    // }

    return (
        <Box
            sx={{
                height: "100vh",
                background: "#000",
                position: "fixed",
                width: "21vw",
                zIndex: "2",
                top: 0 
            }}
        >
            <Box container >
                <Box item xs={12} md={2.5} 
                    sx={{
                        // boxShadow: "0 0 5px 0 gray",
                        borderRight: "2px dashed #edeff1",
                        // textAlign: "center",
                        height: "100vh",
                        display: {xs: "none", md: "block"},
                        paddingTop: "12px",
                    }}
                >
                    {menu}
                </Box>
                <Box item 
                    sx={{
                        marginLeft: {xs: "0", md: "21vw"}
                    }}
                >
                    <Box>
                        <Box>
                            <AppBar 
                                position="static"
                                elevation={0}
                                sx={{
                                    display: {xs: "block", md: "none"},
                                    background: "#edeff1",
                                    // height: "18vh",
                                    position: "fixed",
                                    top: 0,
                                    padding: "10px 1%"
                                }}
                            >
                                <Toolbar variant="dense"  
                                    sx={{
                                        justifyContent: {xs: "space-between", md: "end"}, 
                                        backdropFilter: "blur(5px)", 
                                        zIndex: "555", 
                                        width: {md: "75vw"}, 
                                        paddingRight: {xs: "0", md: "55px"} 
                                    }}
                                >
                                    <img src={logo} alt="" />
                                    <Box sx={{display: {xs: "flex", md: "flex"}}}>
                                        
                                        <Fragment >
                                            <Button sx={{display: {xs: "block", md: "none"}}} onClick={toggleDrawer("left", true)}><MenuIcon sx={{color: "black"}}/></Button>
                                            <SwipeableDrawer
                                                // sx={{background: "#1d202b"}}
                                                anchor="left"
                                                open={state["left"]}
                                                onClose={toggleDrawer("left", false)}
                                                onOpen={toggleDrawer("left", true)}
                                            >
                                                <Box sx={{width: 250, background: "#1d202b", height: "100%"}}>
                                                    { menu }
                                                </Box>
                                            </SwipeableDrawer>
                                        </Fragment>

                                    </Box>
                                </Toolbar>
                            </AppBar> 
                        </Box>
                        <Box
                            sx={{
                                padding: {xs: "20px", md: "50px"},
                                // marginTop: "8vh"
                            }}
                        >
                            {/* {display()} */}
                        </Box>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
}
 
export default AdminSidebar;