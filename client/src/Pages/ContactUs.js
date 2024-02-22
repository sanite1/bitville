import Box from "@mui/material/Box"
import {  AppBar, aToolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import ClientComments from "../Data/ClientComment";
import Services from "../Data/Services";
import Projects from "../Data/Projects";
import FAQs from "../Data/Faqs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Values from "../Data/Values";
import Team from "../Data/Team";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>

const WhatWeDo = () => {

    let navigate = useNavigate();

    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);

    
    return (
        <Box
            sx={{
                // height: "100vh",
                // background: "#000000"
            }}
        >
            <Navbar />
            <Box
                sx={{
                    height: "88vh",
                    background: `url(${"./images/wwdIntro.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}

            >
                <Box
                    sx={{
                        height: "88vh",
                        background: "linear-gradient(93.35deg, #0A3244 8.03%, rgba(86, 114, 126, 0.88) 35.09%, rgba(255, 255, 255, 0) 94.87%)",
                    }}

                >
                    <Typography
                        sx={{
                            margin: "auto 5%",
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: {xs: "32px", sm: "36px", md: "40px"},
                            lineHeight: {xs: "37px", sm: "42px", md: "49px"},
                            textAlign: {xs: "center", md: "left"},
                            paddingTop: "20vh",
                            width: {xs: "90%", md: "35%"},
                            color: "#FFFFFF",
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        sx={{
                            margin: "24px 5% auto",
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            textAlign: {xs: "center", md: "left"},
                            fontSize: "18px",
                            lineHeight: "27px",
                            width: {xs: "90%", md: "35%"},
                            color: "#FFFFFF",
                        }}
                    >
                        Does your project need to be pushed to new heights? We can help.
                    </Typography>
                    <Box sx={{display: "flex",  margin: "24px 5% auto",alignItems: "center"}}>
                        <img src="./images/con-phone.svg" alt="" />
                        <Typography
                            sx={{
                                marginLeft: "24px",
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                textAlign: {xs: "center", md: "left"},
                                fontSize: {xs: "28px"},
                                lineHeight: {xs: "35px"},
                                textAlign: {xs: "center", md: "left"},
                                // width: {xs: "90%", md: "35%"},
                                color: "#FFFFFF",
                            }}
                        >
                            +2348149650119
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex",  margin: "24px 5% auto",alignItems: "center"}}>
                        <img src="./images/con-email.svg" alt="" />
                        <Typography
                            sx={{
                                marginLeft: "24px",
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                textAlign: {xs: "center", md: "left"},
                                fontSize: {xs: "28px"},
                                lineHeight: {xs: "35px"},
                                textAlign: {xs: "center", md: "left"},
                                // width: {xs: "90%", md: "35%"},
                                color: "#FFFFFF",
                            }}
                        >
                            info@bitville.com
                        </Typography>
                    </Box>
                </Box>
            </Box>

            
            
            <ContactUs />
            
            <Footer />
        </Box>
    );
}
 
export default WhatWeDo;