
import {  AppBar, Toolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton, Box, Menu, MenuItem } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import MenuIcon from '@mui/icons-material/Menu';
import LayersIcon from '@mui/icons-material/Layers';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import logo from "./images/logo.svg"
import dropdown from "./images/dropdown.svg"

const Navbar = () => {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let params = useParams();

    // console.log(params);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [anchorServices, setAnchorServices] = useState(null);
    const openServices = Boolean(anchorServices);

    const handleMouseEnterServices = (event) => {
        setAnchorServices(event.currentTarget);
    };

    const handleMouseLeaveServices = () => {
        setAnchorServices(null);
    };
    

    const [anchorElAbout, setAnchorElAbout] = useState(null);
    const openAbout = Boolean(anchorElAbout);

    const handleMouseEnterAbout = (event) => {
        console.log("MOUSE ENTERED ABOUT");
        setAnchorElAbout(event.currentTarget);
    };

    const handleMouseLeaveAbout = () => {
        console.log("MOUSE LEFT ABOUT");
        setAnchorElAbout(null);
    };
    
    
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
    

    const menu = <Box
        sx={{
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
            <Link style={{ textDecoration: "none", color: "inherit"}} to={"/"}><img src={logo} alt="" width="" /></Link>
        </Box>
        
        <Box sx={{ width: '100%', fontSize: "20px", }} onClick={toggleDrawer("left", false)} onKeyDown={toggleDrawer("left", false)}>
            <List component="nav" aria-label="main mailbox folders">
                <Link style={{marginBottom: "20px", textDecoration: "none", color: "inherit"}} to={"/about"}>
                    <ListItemButton
                        sx={{marginBottom: "20px", borderRadius: "6px" }}
                    >
                        <ListItemIcon >
                            <InfoIcon sx={{fontSize: '24px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="About Us" primaryTypographyProps={{fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                        
                    </ListItemButton>
                </Link>
                <Link style={{marginBottom: "20px", textDecoration: "none", color: "inherit"}} to={"/what-we-do"}>
                    <ListItemButton
                        sx={{marginBottom: "20px", borderRadius: "6px" }}
                    >
                        <ListItemIcon >
                            <DeviceUnknownIcon sx={{fontSize: '24px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Services" primaryTypographyProps={{fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                    </ListItemButton>
                </Link>
                <Link style={{marginBottom: "20px", textDecoration: "none", color: "inherit"}} to={"/projects"}>
                    <ListItemButton
                        sx={{marginBottom: "20px", borderRadius: "6px" }}
                    >
                        <ListItemIcon>
                            <LayersIcon sx={{fontSize: '24px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Our Works" primaryTypographyProps={{fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                    </ListItemButton>
                </Link>
                {/* <Link style={{marginBottom: "20px", textDecoration: "none", color: "inherit"}} to={"/career"}>
                    <ListItemButton
                        sx={{marginBottom: "20px", borderRadius: "6px" }}
                    >
                        <ListItemIcon>
                            <WorkIcon sx={{fontSize: '24px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Career" primaryTypographyProps={{fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                    </ListItemButton>
                </Link> */}
                <Link style={{marginBottom: "20px", textDecoration: "none", color: "inherit"}} to={"/blogs"}>

                    <ListItemButton
                        sx={{marginBottom: "20px", borderRadius: "6px" }}
                    >
                        <ListItemIcon>
                            <BookIcon sx={{fontSize: '24px'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Blogs" primaryTypographyProps={{fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                    </ListItemButton>
                </Link>
            
                
            </List>
            <Divider />

            <ListItemButton
                sx={{ borderRadius: "6px" }}
            >
                <Link
                    to={"/contact-us"}
                    style={{
                        marginTop: "30px",
                        textDecoration: "none",
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: "16px",
                        background: "linear-gradient(102.04deg, #1FABE9 16.99%, rgba(18, 0, 126, 0.95) 106.59%)",
                        padding: "10px 30px",
                        color: "#ffffff",
                        lineHeight: "20px",
                        textTransform: "none ! important",
                        borderRadius: "8px"
                    }}
                >
                    {"Contact us"}
                </Link>
            </ListItemButton>
            
        </Box>
    </Box>

    return ( 
        
        <Box>
            <Box>
                <AppBar 
                    position="fixed"
                    elevation={0}
                    sx={{
                        background: "#ffffff",
                        boxSizing: "border-box",
                    }}
                >
                    <Toolbar variant="dense"  
                        sx={{
                            display: "flex",
                            justifyContent: {xs: "space-between"}, 
                            height: "12vh", 
                            boxSizing: "border-box",
                            padding: "0",
                            width: "93%",
                            margin: "auto",
                        }}
                    >
                        <Link to={"/"}><img src={logo} alt="" /></Link>
                        <Box >
                            
                            <Fragment >
                                <Button sx={{display: {xs: "block", md: "none"}}} onClick={toggleDrawer("left", true)}><MenuIcon sx={{color: "black", padding: "7px", borderRadius: "10px", border: "2px solid black"}}/></Button>
                                <SwipeableDrawer
                                    
                                    anchor="left"
                                    open={state["left"]}
                                    onClose={toggleDrawer("left", false)}
                                    onOpen={toggleDrawer("left", true)}
                                >
                                    <Box sx={{width: 250}}>
                                        { menu }
                                    </Box>
                                </SwipeableDrawer>
                            </Fragment>
                            <Fragment >
                                <Box sx={{display: {xs: "none", md: "block"}}}>
                                    <Box sx={{display: "flex", alignItems: "center", width: "100%", justifyContent: "space-evenly"}}>
                                        <Box>
                                            <Button  onMouseOver={handleMouseEnterAbout}  sx={{textTransform: "none ! important", fontFamily: `${"Montserrat"}, sans-serif`, fontSize: "16px", color: "black", marginRight: "40px", display: "flex", alignItems: "center"}}>About Us <img style={{marginLeft: "10px"}} src={dropdown} alt="" /></Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorElAbout}
                                                open={openAbout}
                                                onClose={handleMouseLeaveAbout}
                                                // onMouseEnter={handleMouseEnterAbout}
                                                onMouseLeave={handleMouseLeaveAbout}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                                
                                            >
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/about"}>
                                                    <MenuItem>Our Mission</MenuItem>
                                                </Link>
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/about"}>
                                                    <MenuItem>Our Vision</MenuItem>
                                                </Link>
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/about"}>
                                                    <MenuItem>Our Values</MenuItem>
                                                </Link>
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/about"}>
                                                    <MenuItem>Meet Our Team</MenuItem>
                                                </Link>
                                            </Menu>
                                        </Box>
                                    
                                        <Box>
                                            <Button onMouseOver={handleMouseEnterServices} sx={{textTransform: "none ! important", fontFamily: `${"Montserrat"}, sans-serif`, fontSize: "16px", color: "black", marginRight: "40px", display: "flex", alignItems: "center"}}>Services<img style={{marginLeft: "10px"}} src={dropdown} alt=""  /></Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorServices}
                                                open={openServices}
                                                onClose={handleMouseLeaveServices}
                                                // onMouseEnter={handleMouseEnterServices}
                                                onMouseLeave={handleMouseLeaveServices}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/what-we-do"}>
                                                    <MenuItem>Web Design and Development</MenuItem>
                                                </Link>
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/what-we-do"}>
                                                    <MenuItem>Mobile App Development</MenuItem>
                                                </Link>
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/what-we-do"}>
                                                    <MenuItem>UI/UX</MenuItem>
                                                </Link>
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/what-we-do"}>
                                                    <MenuItem>Branding and Graphics Design</MenuItem>
                                                </Link>
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={"/what-we-do"}>
                                                    <MenuItem>Business Development Services</MenuItem>
                                                </Link>
                                            </Menu>
                                        </Box>
                                        <Link to={"/projects"} style={{fontFamily: `${"Montserrat"}, sans-serif`, textDecoration: "none", color: "#000000", marginRight: "40px"}} >Our Works</Link>
                                        {/* <Link to={"/"} style={{fontFamily: `${"Montserrat"}, sans-serif`, textDecoration: "none", color: "#1FABE9", marginRight: "40px"}} >Career</Link> */}
                                        <Link to={"/blogs"} style={{fontFamily: `${"Montserrat"}, sans-serif`, textDecoration: "none", color: "#1FABE9", marginRight: "40px"}} >Blogs</Link>
                                        <Link
                                            to={"/contact-us"}
                                            style={{
                                                textDecoration: "none",
                                                fontFamily: `${"Montserrat"}, sans-serif`,
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                background: "linear-gradient(102.04deg, #1FABE9 16.99%, rgba(18, 0, 126, 0.95) 106.59%)",
                                                padding: "10px",
                                                color: "#ffffff",
                                                lineHeight: "20px",
                                                textTransform: "none ! important",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            {"Contact us"}
                                        </Link>
                                    </Box>
                                    
                                </Box>
                            </Fragment>

                        </Box>
                    </Toolbar>
                </AppBar> 
                <Box sx={{marginBottom: "12vh"}}></Box>
            </Box>
        </Box>
     );
}
 
export default Navbar;

