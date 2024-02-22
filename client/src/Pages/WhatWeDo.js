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
                        <Box sx={{padding: "0"}}>
                            <img style={{width: "100%", borderRadius: "10px"}} src={item.img} alt="client1" />
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
                        What we offer
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
                         Let's work together to bring your vision to life. Contact us today and let's get started on this journey together. Our team at Bitville Technologies can't wait to help your business succeed online
                    </Typography>
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
                    <Grid item sm={12} md={7} order={{xs: 2, sm: 1}}>
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
                                >Web Design and Development</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        // marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    At Bitville Technologies, we specialize in designing and developing custom websites that are tailored to our clients' unique requirements. Our team of experienced designers and developers work closely with our clients to create stunning websites that are not only visually appealing but also functional and user-friendly.<br />
                                    We use the latest technologies and industry best practices to ensure that our websites are fast, responsive, and optimized for search engines. Whether you're looking for a simple brochure website or a complex e-commerce platform, we can help you create a website that meets your business goals.
                                </Typography>
                            </Box>  
                        </Box>

                    </Grid>
                    <Grid item sm={12} md={5} order={{xs: 1, sm: 2}}>
                        <Box
                            sx={{

                            }}
                        >
                            <img style={{width: "100%"}} src="./images/wwd-web.png" alt="Why?" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <img style={{width: "100%"}} src="./images/divider.svg" alt="" />

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
                            <img style={{width: "100%"}} src="./images/wwd-web.png" alt="Why?" />
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
                                >Mobile App Development</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        // marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    In today's mobile-first world, having a mobile app is essential for businesses that want to reach and engage their customers. At Bitville Technologies, we specialize in developing custom mobile apps that are tailored to our clients' unique requirements.<br />
                                    Our team of experienced mobile app developers use the latest technologies and industry best practices to create stunning mobile apps that are not only visually appealing but also functional and user-friendly. Whether you're looking for an iOS app, an Android app, or a cross-platform app, we can help you create a mobile app that meets your business goals.
                                    </Typography>
                            </Box>  
                        </Box>

                    </Grid>
                </Grid>
            </Box>

            
            <img style={{width: "100%"}} src="./images/divider.svg" alt="" />
            
            <Box
                sx={{
                    margin: "auto 5%",
                    marginTop: "33px",
                    marginBottom: "41px",
                }}
            >
                <Grid container spacing={6}>
                    <Grid item sm={12} md={7} order={{xs: 2, sm: 1}}>
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
                                >UI/UX</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        // marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    User experience (UX) and user interface (UI) design are essential components of creating a successful digital product. At Bitville Technologies, we offer UI/UX design services to help our clients create a cohesive and engaging online presence.<br />
                                    Our team of experienced designers use the latest design trends and best practices to create stunning and user-friendly digital products that represent our clients' brand. Whether you're looking to refresh your brand, design a new website, or create a mobile app, we can help you create a stunning product that represents your brand and engages your customers.
                                </Typography>
                            </Box>  
                        </Box>

                    </Grid>
                    <Grid item sm={12} md={5} order={{xs: 1, sm: 2}}>
                        <Box
                            sx={{

                            }}
                        >
                            <img style={{width: "100%"}} src="./images/wwd-uiux.png" alt="Why?" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <img style={{width: "100%"}} src="./images/divider.svg" alt="" />

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
                            <img style={{width: "100%"}} src="./images/wwd-branding.png" alt="Why?" />
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
                                >Branding and Graphics Design</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        // marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    At Bitville Technologies, we understand the importance of branding in creating a successful business. That's why we offer branding and graphics design services to help our clients create a cohesive and engaging brand identity.<br />
                                    Our team of experienced designers work closely with our clients to understand their brand and create a unique and memorable brand identity that stands out in their industry. Whether you're looking to refresh your brand or create a new one from scratch, we can help you create a stunning brand identity that represents your business and resonates with your customers.
                                    </Typography>
                            </Box>  
                        </Box>

                    </Grid>
                </Grid>
            </Box>

            
            <img style={{width: "100%"}} src="./images/divider.svg" alt="" />


            <Box
                sx={{
                    margin: "auto 5%",
                    marginTop: "33px",
                    marginBottom: "41px",
                }}
            >
                <Grid container spacing={6}>
                    <Grid item sm={12} md={7} order={{xs: 2, sm: 1}}>
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
                                >Business Development Services</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        // marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    At Bitville Technologies, we offer business development services to help our clients establish a strong digital identity and optimize their social media presence. Our team of experienced digital marketers works closely with our clients to understand their business goals and create a customized digital marketing strategy that meets their needs.<br />                                
                                    We offer a range of digital marketing services, including social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, email marketing, and content marketing. Whether you're looking to increase your brand awareness, generate leads, or drive sales, we can help you achieve your business goals through our business development services.
                                    
                                </Typography>
                            </Box>  
                        </Box>

                    </Grid>
                    <Grid item sm={12} md={5} order={{xs: 1, sm: 2}}>
                        <Box
                            sx={{

                            }}
                        >
                            <img style={{width: "100%"}} src="./images/wwd-uiux.png" alt="Why?" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
            <ContactUs />
            
            <Footer />
        </Box>
    );
}
 
export default WhatWeDo;