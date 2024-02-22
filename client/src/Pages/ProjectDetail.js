import Box from "@mui/material/Box"
import {  AppBar, aToolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton, Grid } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import FAQs from "../Data/Faqs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Blogs from "../Data/Blogs";
import background from "./images/blogDetailIntro.png"
import { useParams } from "react-router-dom";
import ProjectData from "../Data/Projects";
import challenge from "./images/challenge.png"
import divider from "./images/divider.svg" 
import api from "../api/api";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>


const ProjectDetails = () => {

    
    
    const {id} = useParams()
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getProjectData = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            const response = await api.post(`/projects/${id}`)
            if (response.data?.success === false) {
                setLoading(false)
            } else {
                setData(response.data.data) 
            }
        } catch(err) {
            setLoading(false)
            if(err.response) {
                setLoading(false)
            }
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        getProjectData()
    }, []);


    const features = data?.features?.map((item, pos) =>{
        return (
            <li key={pos}>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: {xs: "18px"},
                        lineHeight: {xs: "24px"},
                        color: "#000000",
                        // marginBottom: "30px",
                    }}
                >
                    {item.desc}
                </Typography>

            </li>
        )
    })
    return (
        <>
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
                    background: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}

            >
                <Box
                    sx={{
                        height: "88vh",
                        background: "linear-gradient(89.51deg, #004665 17.31%, rgba(255, 255, 255, 0) 78.52%)"
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
                            width: {xs: "90%", md: "40%"},
                            color: "#ffffff",
                        }}
                    >
                        {data?.title}
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
                        {data?.detailIntro}
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
                                color: "#ffffff",
                                padding: "9px 20px",
                                boxSizing: "border-box",
                                border: "2px solid #ffffff",
                                width: "fit-content",
                                borderRadius: "6px",
                                textAlign: {xs: "center", md: "left"},
                            }}
                        >
                            View Project
                        </Typography>
                    </Box>

                </Box>
            </Box>
            
            {/* Blog */}

            <Box
                sx={{
                    width: {xs: "90%"},
                    margin: "auto",
                    marginTop: "50px",
                    marginBottom: "50px",
                }}
            >
                <Grid container spacing={6}>
                    <Grid item sm={12} md={7} order={{xs: 2, sm: 1}}>
                        <Box 
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: {xs: "32px", sm: "36px", md: "40px"},
                                        lineHeight: {xs: "37px", sm: "42px", md: "49px"},
                                        // marginTop: "10vh",
                                        // width: {xs: "90%", md: "40%"},
                                        marginBottom: "30px",
                                        color: "#000000",
                                    }}
                                >
                                    {/* {data?.title} */}
                                    The <span style={{color: "#44B9ED"}}>Challenge</span>
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: {xs: "18px"},
                                        lineHeight: {xs: "24px"},
                                        color: "#000000",
                                        marginBottom: "30px",
                                    }}
                                >
                                    {data?.challenge}
                                </Typography>
                            </Box>  
                        </Box>

                    </Grid>
                    <Grid item sm={12} md={5} order={{xs: 1, sm: 2}}>
                        <Box>
                            <img style={{width: "100%"}} src={challenge} alt="Why?" />
                        </Box>
                    </Grid>
                </Grid>
                
            </Box>
            <img style={{width: "100%"}} src={divider} alt="" />

            {/* {sections} */}
            <Box
                sx={{
                    width: {xs: "90%"},
                    margin: "auto",
                    marginTop: "50px",
                    marginBottom: "50px",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: {xs: "32px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "37px", sm: "42px", md: "49px"},
                        // marginTop: "10vh",
                        // width: {xs: "90%", md: "40%"},
                        marginBottom: "30px",
                        textAlign: "center",
                        color: "#44B9ED",
                    }}
                >
                    {/* {data?.title} */}
                    Our <span style={{color: "#000000"}}>Strategy</span>
                </Typography>
                <Box
                    sx={{
                        width: {xs: "100%", md: "70%"}, margin: "auto"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: {xs: "18px"},
                            lineHeight: {xs: "24px"},
                            color: "#000000",
                            // marginBottom: "30px",
                        }}
                    >
                        Key features:
                    </Typography>
                    <ul>{features}</ul>
                </Box>
                
            </Box>  

            
            
            <img style={{width: "100%"}} src={divider} alt="" />

            <Box
                sx={{
                    width: {xs: "90%"},
                    margin: "auto",
                    marginTop: "50px",
                    marginBottom: "50px",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: {xs: "32px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "37px", sm: "42px", md: "49px"},
                        // marginTop: "10vh",
                        // width: {xs: "90%", md: "40%"},
                        marginBottom: "30px",
                        textAlign: "center",
                        color: "#000000",
                    }}
                >
                    {/* {data?.title} */}
                    The <span style={{color: "#44B9ED"}}>Result</span>
                </Typography>
                <Box
                    sx={{
                        width: {xs: "100%", md: "70%"}, margin: "auto"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: {xs: "18px"},
                            lineHeight: {xs: "24px"},
                            color: "#000000",
                            // marginBottom: "30px",
                        }}
                    >
                        {data?.result}
                    </Typography>
                    {/* <ul>{features}</ul> */}
                </Box>
                
            </Box>  
            
            <Footer />
        </Box>
        
        </>
    );
}
 
export default ProjectDetails;