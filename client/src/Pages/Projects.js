import Box from "@mui/material/Box"
import {  AppBar, aToolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton, Grid } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import ProjectData from "../Data/Projects";
import FAQs from "../Data/Faqs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Values from "../Data/Values";
import Team from "../Data/Team";
import api from "../api/api";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>

const Projects = () => {

    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const getProjectsData = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            const response = await api.post(`/projects`)
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
        getProjectsData()
    }, []);


    
    
    const projects = data?.map((item, pos) => {
        return(
            <Box
                sx={{
                    marginTop: "33px",
                    marginBottom: "41px",
                    background: "linear-gradient(102.42deg, #1FABE9 3.12%, #021721 23.27%, #7F3599 67.34%, #0A3244 96.51%)",
                    padding: "30px 5%"
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
                                        fontSize: {xs: "28px", sm: "36px", md: "40px"},
                                        lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                                        // width: {xs: "100%", md: "60%"},
                                        fontWeight: 700,
                                        padding: "20px 0",
                                        color: "#ffffff",
                                        // marginBottom: "45px",
                                    }}
                                >{item.title}</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px",
                                        lineSpacing: "3px",
                                        color: "#ffffff",
                                        marginBottom: "24px",
                                        width: "100%"
                                    }}
                                >
                                    {item.preview}

                                </Typography>
                                <Link
                                    to={item.link}
                                    style={{
                                        textDecoration: "none",
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "20px",
                                        color: "#FFFFFF",
                                        padding: "9px 20px",
                                        boxSizing: "border-box",
                                        border: "2px solid #ffffff",
                                        width: "fit-content",
                                        borderRadius: "6px",
                                        // textAlign: {xs: "center", md: "left"},
                                        // marginTop: "50px"
                                    }}
                                >
                                    View more
                                </Link>
                            </Box>  
                        </Box>

                    </Grid>
                    <Grid item sm={12} md={5} order={{xs: 1, sm: 2}}>
                        <Box
                            sx={{

                            }}
                        >
                            <img style={{width: "100%"}} src={item.img} alt="Why?" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

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
                    background: `url(${"./images/blogIntro.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
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
                        Our Projects
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
                        Feeling inspired? Let's get to work!
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
                                padding: "9px 20px",
                                boxSizing: "border-box",
                                border: "2px solid #ffffff",
                                width: "fit-content",
                                borderRadius: "6px",
                                textAlign: {xs: "center", md: "left"},
                            }}
                        >
                            Enquire now
                        </Typography>
                    </Box>

                    
                </Box>
            </Box>

            {/* Projects section */}
            <Box
                sx={{
                    margin: "auto 5%",
                    marginTop: "60px",
                    marginBottom: "41px",
                }}
            >
                {projects}
            </Box>

            <img style={{width: "100%"}} src="./images/divider.svg" alt="" />

            <ContactUs />
            
            <Footer />
        </Box>
    );
}
 
export default Projects;