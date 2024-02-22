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
import claim  from "./images/claim.svg" 
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>

const AboutUs = () => {

    let navigate = useNavigate();

    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);

    
    const values = Values.map((item, pos) => {
        return(
            <Grid key={item.id} item sm={12} md={4} sx={{padding: "25px", }}>
                <Box >
                    <Box
                        sx={{
                            height: {xs: "", md: "370px"},
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "start",
                            alignItems: "space-evenly",
                        }}
                    >
                        <img src={item.img} alt="member" />
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "28px",
                                lineHeight: "34px",
                                color: "#ffffff",
                                width: "100%",
                                margin: "28px 0 18px",
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "#ffffff",
                                    width: "100%",
                                }}
                            >
                                {item.comment}
                            </Typography>
                            
                        </Box>
                    </Box>
                </Box>
            </Grid>
        )
    })

    
    const team = Team.map((item, pos) => {
        return(
            <Grid key={item.id} item sm={12} md={4} sx={{padding: "15px", }}>
                <Box >
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            padding: {xs: 0, md: "16px"},
                        }}
                    >
                        <Box sx={{padding: "0", height: "350px", width: "100%"}}>
                            <img style={{width: "100%",  height: "100%", borderRadius: "10px"}} src={item.img} alt="client1" />
                        </Box>
                        
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "space-between",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: "18px",
                                    lineHeight: "22px",
                                    color: "#ffffff",
                                    width: "100%",
                                    margin: "28px 0 18px",
                                    textAlign: "left"
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "#ffffff",
                                    width: "100%",
                                    textAlign: "left"
                                }}
                            >
                                {item.role}
                            </Typography>
                            
                        </Box>
                    </Box>
                </Box>
            </Grid>
        )
    })

    
    return (
        <Box
            sx={{
                // height: "vh",
                // background: "#000000"
            }}
        >
            <Navbar />
            
            <Box
                sx={{
                    height: "88vh",
                    background: `url(${"./images/aboutIntro.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}

            >
                <Box
                    sx={{
                        height: "88vh",
                        background: "linear-gradient(270deg, rgba(196, 196, 196, 0) 1.18%, rgba(0, 24, 29, 0.9) 76.53%)",
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
                        About Bitville Technologies
                    </Typography>
                    <Typography
                        sx={{
                            margin: "24px 5% auto",
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            textAlign: {xs: "center", md: "left"},
                            fontSize: "18px",
                            lineHeight: "27px",
                            width: {xs: "90%", md: "40%"},
                            color: "#FFFFFF",
                        }}
                    >
                        We are a team of young and talented developers who have come together with a shared passion for delivering exceptional software solutions to meet our clients' needs
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: {xs: "center", md: "start"},
                            width: "100%"
                        }}
                    >
                        <Typography
                            sx={{
                                margin: "24px 5% auto",
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontSize: "16px",
                                lineHeight: "20px",
                                color: "#FFFFFF",
                                padding: "9px 44px",
                                boxSizing: "border-box",
                                border: "2px solid #ffffff",
                                width: "fit-content",
                                borderRadius: "6px",
                                textAlign: {xs: "center", md: "left"},
                            }}
                        >
                            Meet our Team
                        </Typography>
                    </Box>

                </Box>
            </Box>

            {/* About us section */}
            <Box
                sx={{
                    margin: "auto 5%",
                    marginTop: "33px",
                    marginBottom: "41px",
                }}
            >
                

                <Grid container spacing={6}>
                    <Grid item sm={12} md={5}>
                        <Box
                            sx={{

                            }}
                        >
                            <img style={{width: "100%"}} src="./images/welcome.png" alt="Why?" />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={7}>
                        <Box 
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                // flexWrap: "wrap"

                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontSize: {xs: "28px", sm: "36px", md: "40px"},
                                        lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                                        width: {xs: "100%", md: "60%"},
                                        fontWeight: 700,
                                        padding: "20px 0",
                                        color: "#06222F",
                                        // marginBottom: "45px",
                                    }}
                                >Welcome to Bitville Technologies!</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    Our team is made up of experts in various fields of software development, including web design, mobile app development, software engineering, UI/UX graphics, and branding. We take pride in our ability to provide custom solutions that are tailored to our clients' unique requirements.<br />
                                    At Bitville Technologies, we understand that creating a successful digital product requires more than just technical expertise. That's why we also offer UI/UX graphics and branding services to help our clients create a cohesive and engaging online presence. Whether you're looking to refresh your brand, design a new website, or create a mobile app, our team can help you create a stunning and user-friendly product that represents your brand.

                                </Typography>
                                <Button
                                    sx={{
                                        // margin: "24px 5% auto",
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        background: "#ffffff",
                                        padding: "10px 20px",
                                        color: "#1FABE9",
                                        lineHeight: "20px",
                                        textTransform: "none ! important",
                                        borderRadius: "8px",
                                        border: "2px solid #1FABE9"
                                    }}
                                >
                                    Get a free Consulting Session
                                </Button>
                            </Box>  
                        </Box>

                    </Grid>
                </Grid>
            </Box>

            {/* OurValues */}

            <Box>
                <Box
                    id="mission"
                    sx={{
                        margin: "auto 5%",
                        // paddingTop: "51px",
                        paddingBottom: "82px",
                    }}
                >
                    <Grid container spacing={12}>    
                        <Grid item sm={12} md={6} >
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: "28px",
                                    lineHeight: "34px",
                                    color: "#373737",
                                    paddingBottom: "20px",
                                }}
                            >
                                Our Mission
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "#373737",
                                }}
                            >
                                At Bitville Technologies, our mission is to empower businesses with cutting-edge web design solutions that elevate their online presence and drive growth. Through innovation, creativity, and exceptional customer service, we strive to be the go-to partner for businesses looking to make their mark in the digital world
                            </Typography>
                            
                        </Grid>
                        <Grid item sm={12} md={6} >
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: "28px",
                                    lineHeight: "34px",
                                    color: "#373737",
                                    paddingBottom: "20px",
                                }}
                            >
                                Our Vision
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "#373737",
                                }}
                            >
                                At Bitville Technologies, our mission is to empower businesses with cutting-edge web design solutions that elevate their online presence and drive growth. Through innovation, creativity, and exceptional customer service, we strive to be the go-to partner for businesses looking to make their mark in the digital world
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box
                sx={{
                    background: "linear-gradient(101.98deg, #1A8FC2 6.74%, rgba(2, 102, 147, 0.83) 30.54%, rgba(23, 142, 194, 0.56) 56.13%, #073C53 96.45%)"
                }}
            >
                <Box
                    sx={{
                        margin: "auto 5%",
                        padding: "35px 0",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "40px",
                            lineHeight: "49px",
                            color: "#ffffff",
                            paddingBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        Our Values
                    </Typography>
                    <Grid container spacing={0}>
                        {values}
                    </Grid>
                </Box>
            </Box>



            {/* A bit More about us */}
            <Box>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: {xs: "28px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                        padding: "20px 0",
                        color: "rgba(6, 34, 47, 0.1)",
                        textAlign: {xs: "center", md: "right"},
                        width: {xs: "100%", md: "80%"},
                        margin: "auto",
                        marginTop: "50px",
                    }}
                >A bit More about us</Typography>
                
            </Box>

            <Box
                sx={{
                    margin: "auto 5%",
                    marginTop: "33px",
                    marginBottom: "41px",
                }}
            >
                

                <Grid container spacing={6}>
                    <Grid item sm={12} md={5}>
                        <Box
                            sx={{

                            }}
                        >
                            <img style={{width: "100%"}} src="./images/about2.png" alt="Why?" />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={7}>
                        <Box 
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                // flexWrap: "wrap"

                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    We are committed to delivering high-quality projects that exceed our clients' expectations. We believe that collaboration and open communication are key to achieving this goal. That's why we work closely with our clients throughout the development process to ensure that we understand their needs and can deliver a solution that meets their goals.<br />
                                    We are passionate about staying up-to-date with the latest technologies and industry trends to ensure that our clients are always receiving the most innovative solutions. Whether you're looking for a new website, a mobile app, or a custom software solution, our team at Bitville Technologies is here to help.<br />

                                    Thank you for considering us for your next project. We look forward to the opportunity to work with you and deliver a solution that exceeds your expectations.<br />

                                </Typography>
                                
                            </Box>  
                        </Box>

                    </Grid>
                </Grid>
            </Box>


            {/* FAQ */}
   
            <Box
                sx={{
                    background: `url(${"./images/teamBackground.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <Box
                    sx={{
                        margin: "auto 5%",
                        paddingTop: {xs: "25px", md: "50px"},
                        paddingBottom: "35px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: {xs: "28px", sm: "36px", md: "40px"},
                            lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                            padding: "20px 0 0",
                            color: "#ffffff",
                            width: {xs: "100%", md: "40%"},
                            // marginTop: "",
                        }}
                    >Meet Our Team</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "27px",
                            marginTop: "20px",
                            color: "#ffffff",
                            width: {xs: "100%", md: "40%"},
                            marginBottom: "44px",
                        }}
                    >We are a team of young and talented developers who have come together with a shared passion for delivering exceptional software solutions to meet our clients' needs</Typography>
                    <Grid container spacing={0}>
                        {team}
                    </Grid>
                </Box>
            </Box>
            
            {/* Great Clients */}

            <ContactUs />
            
            <Footer />
        </Box>
    );
}
 
export default AboutUs;