import Box from "@mui/material/Box"
import {  AppBar, aToolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton, Grid } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import ClientComments from "../Data/ClientComment";
import Services from "../Data/Services";
import Projects from "../Data/Projects";
import FAQs from "../Data/Faqs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import api from "../api/api";
import PersonIcon from '@mui/icons-material/Person';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>

const Home = () => {

    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getProjects = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            const response = await api.post("/projects")
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
        getProjects()
    }, []);

    

    const clients = ClientComments.map((item, pos) => {
        return(
            <Grid key={item.id} item sm={12} md={6} >
                <Grid container>
                    <Grid item sm={12} md={4}
                        sx={{
                            margin: {xs: "auto"},
                            // display: "flex",
                            // justifyContent: "center",
                            // borderRadius: "50%",
                            // background: "lightgray",
                            // padding: "30px",
                            // width: "fit-content"
                        }}
                    >
                        <Box 
                            sx={{
                                margin: {xs: "auto"},
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: "50%",
                                background: "lightgray",
                                padding: "20px",
                                width: "fit-content"
                            }}
                        >
                            {/* <img src={item.img} alt="client1"  /> */}
                            <PersonIcon  sx={{color: "white", fontSize: "50px"}} />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={7} sx={{marginLeft: "10px"}}>
                        <Box sx={{display: "flex",}}>
                            <Box
                                sx={{
                                    marginRight: "12px",
                                }}
                            >
                                <img src="./images/openQuote.png" alt=""  />
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {item.comment}
                                </Typography>
                            </Box>
                            <Box  sx={{alignSelf: "flex-end"}}>
                                <img src="./images/closeQuote.png" alt=""  />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "24px",
                                lineHeight: "34px",
                                marginTop: "24px",
                                marginBottom: "8px",
                                color: "#FFFFFF",
                            }}
                        >
                            {`_${item.name}`}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "27px",
                                color: "#FFFFFF",
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Grid>
                    
                </Grid>
                
                
            </Grid>
        )
    })
    const services = Services.map((item, pos) => {
        return(
            <Grid key={item.id} item sm={12} md={4} sx={{padding: "15px", }}>
                <Box sx={{boxShadow: "0px 4px 24px rgba(180, 186, 189, 0.15)"}}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            padding: "36px",
                        }}
                    >
                        <img src={item.img} alt="client1"  />
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "19px",
                                color: "#1A8FC2",
                                width: "100%",
                                margin: "28px 0 18px",
                                textAlign: "center"
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "space-between",
                                justifyContent: "center",
                                // padding: "36px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "#0F0F0F",
                                    width: "100%",
                                    textAlign: "center"
                                }}
                            >
                                {item.comment}
                            </Typography>
                            <Link to={"/what-we-do"}
                                style={{
                                    textDecoration: "none",
                                    marginTop: "28px",
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    padding: "10px",
                                    color: "#000000",
                                    lineHeight: "20px",
                                    textTransform: "none ! important",
                                    borderRadius: "8px",
                                    border: "1px solid #000000",
                                }}
                            >
                                {`Read more`} <img style={{marginLeft: "6px"}} src="./images/rightArrow.svg" alt=""  />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        )
    })

    
    const faqs = FAQs.map((item, pos) => {
        return(
            <Grid key={item.id} item sm={12} md={4} sx={{padding: "15px", }}>
                <Box sx={{boxShadow: "0px 4px 24px rgba(180, 186, 189, 0.15)"}}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            padding: "16px",
                        }}
                    >
                        <Box sx={{padding: "0"}}>
                            <img style={{width: "100%"}} src={item.img} alt="client1"  />
                        </Box>
                        
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "space-between",
                                // padding: "36px",
                                height: "260px"
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                    color: "#1A8FC2",
                                    width: "100%",
                                    margin: "28px 0 18px",
                                    textAlign: "left"
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "#0F0F0F",
                                    width: "100%",
                                    textAlign: "left"
                                }}
                            >
                                {item.comment}
                            </Typography>
                            {/* <Button
                                sx={{
                                    marginTop: "28px",
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    padding: "10px",
                                    color: "#000000",
                                    lineHeight: "20px",
                                    textTransform: "none ! important",
                                    borderRadius: "8px",
                                    border: "1px solid #000000",
                                    justifyContent: "start"
                                }}
                            >
                                {`Learn more`} <img style={{marginLeft: "6px"}} src="./images/rightArrow.svg" alt=""  />
                            </Button> */}
                        </Box>
                    </Box>
                </Box>
            </Grid>
        )
    })

    console.log(data);
    
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
                    background: `url(${"./images/home.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
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
                            color: "#FFFFFF",
                        }}
                    >
                        We develop amazing website and apps.
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
                        Bitville Technologies is an IT consulting and software developments agency. Our team is here to help you create a website that truly reflects your brand and connects with your audience.
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
                                padding: "9px",
                                boxSizing: "border-box",
                                border: "2px solid #ffffff",
                                width: "fit-content",
                                borderRadius: "6px",
                                textAlign: {xs: "center", md: "left"},
                            }}
                        >
                            Get a free Consulting Session
                        </Typography>
                    </Box>

                </Box>
            </Box>

            {/* About us section */}
            <Box
                sx={{
                    marginTop: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginRight: "6px",
                    }}
                ></Box>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: {xs: "28px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                        textAlign: "center",
                        padding: "20px 0",
                        color: "#0A394E",
                    }}
                >About Us</Typography>
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginLeft: "6px",
                    }}
                ></Box>
            </Box>
            <Box
                sx={{
                    margin: "auto 5%",
                    marginTop: "33px",
                    marginBottom: "122px",
                }}
            >
                

                <Grid container spacing={6}>
                    <Grid item sm={12} md={6}>
                        <Box
                            sx={{

                            }}
                        >
                            <img style={{width: "100%"}} src="./images/welcome.png" alt="Why?"  />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
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
                                        fontSize: "20px",
                                        lineHeight: "36px",
                                        lineSpacing: "3px",
                                        color: "#373737",
                                        marginBottom: "70px",
                                        width: "100%"
                                    }}
                                >
                                    <span style={{fontSize: {xs: "28px", md: " 40px"}, fontWeight: 500, display: " inline"}}>W</span>elcome to our IT consulting and software solutions firm! We provide innovative technology solutions and expert services to help businesses succeed. Our experienced team delivers personalized solutions tailored to your unique needs, including IT consulting, software development, project management, and support. Let us help you stay ahead of the curve and drive growth for your business. Contact us today to learn more!
                                </Typography>
                                <Link to={"/about"}
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
                                        borderRadius: "8px",
                                    }}
                                >
                                    {"Learn more"}
                                </Link>
                            </Box>  
                        </Box>

                    </Grid>
                </Grid>
            </Box>

            {/* OurValues */}

            <Box
                sx={{
                    background: "linear-gradient(96.44deg, #44B9ED 10.42%, #10339B 58.92%, #0E0294 88.85%)",
                }}
            >
                <Box
                    sx={{
                        margin: "auto 10%",
                        paddingTop: "51px",
                        paddingBottom: "82px",
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            marginBottom: {xs: "45px", sm: "65px", md: "85px"},
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: {xs: "28px", sm: "36px", md: "40px"},
                            lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                            
                            padding: "20px 0",
                            color: "#ffffff",
                        }}
                    >What our clients say about us</Typography>
                    <Grid container spacing={12}>
                        
                        {clients}
                    </Grid>
                </Box>
            </Box>


            {/* Our services section */}
            <Box
                sx={{
                    marginTop: "35px 0 32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginRight: "6px",
                    }}
                ></Box>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: {xs: "28px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                        textAlign: "center",
                        padding: "20px 0",
                        color: "#0A394E",
                    }}
                >Our Services</Typography>
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginLeft: "6px",
                    }}
                ></Box>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        textAlign: "center",
                        color: "#373737",
                        width: {xs: "80%", md: "60%"},
                        margin: "auto",
                        marginBottom: "30px",
                    }}
                >Let's work together to bring your vision to life. Contact us today and let's get started on this journey together. Our team at Bitville Technologies can't wait to help your business succeed online</Typography>
            </Box>

            <Box>
                <Box
                    sx={{
                        margin: "auto 5%",
                        paddingBottom: "35px",
                    }}
                >
                    <Grid container spacing={0}>
                        {services}
                    </Grid>
                </Box>
            </Box>


            {/* Online Presense section */}
            <Box>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: "28px",
                        lineHeight: "34px",
                        padding: "20px 0",
                        color: "#373737",
                        textAlign: "center",
                        marginBottom: "12px",
                    }}
                >Ready to take your online presence to the next level?</Typography>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: "auto",
                        color: "#373737",
                        textAlign: "center",
                        marginBottom: "32px",
                        width: {xs: "90%", sm: "70%", md: "50%"},
                    }}
                >We understand that your website is the face of your business online. That's why we're here to help you create a website that truly reflects your brand and connects with your audience.</Typography>
                <Box sx={{width: "fit-content", margin: "auto", marginBottom: "56px"}}>
                    <Link to={"/contact-us"}
                        style={{
                            textDecoration: "none",
                            margin: "auto",
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            background: "linear-gradient(102.04deg, #1FABE9 16.99%, rgba(18, 0, 126, 0.95) 106.59%)",
                            padding: "10px",
                            color: "#ffffff",
                            lineHeight: "20px",
                            textTransform: "none ! important",
                            borderRadius: "8px",
                            textAlign: "center"
                        }}
                    >
                        {"Contact us today"}
                    </Link>
                </Box>

            </Box>

            {/* Our work section */}

            <Box
                sx={{
                    marginTop: "35px 0 32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginRight: "6px",
                    }}
                ></Box>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: {xs: "28px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                        textAlign: "center",
                        padding: "20px 0",
                        color: "#0A394E",
                    }}
                >Our Works</Typography>
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginLeft: "6px",
                    }}
                ></Box>
            </Box>

            <Box>
                <Grid container spacing={6} sx={{padding: "0 5% 85px"}}>
                    
                    <Grid item sm={12} md={5}>
                    
                        <img style={{width: "100%"}} src={data[0]?.img} alt=""  />
                    </Grid>
                    <Grid item sm={12} md={7}>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontSize: "24px",
                                fontWeight: 600,
                                lineHeight: "29px",
                                padding: {xs: "10px 0", sm: "20px 0"},
                                color: "#373737",
                            }}
                        >{data[0]?.title}</Typography>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "19px",
                                padding: "20px 0",
                                color: "#373737",
                            }}
                        >{data[0]?.field}</Typography>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "24px",
                                padding: "20px 0",
                                color: "#373737",
                            }}
                        >{data[0]?.comment}</Typography>
                        <Link to={`/projects/${data[0]?._id}`}
                            style={{
                                textDecoration: "none",
                                marginTop: "28px",
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontSize: "16px",
                                padding: "10px",
                                color: "#000000",
                                lineHeight: "20px",
                                textTransform: "none ! important",
                                borderRadius: "8px",
                                border: "1px solid #1A8FC2",
                            }}
                        >
                            {`Read more`}
                        </Link>
                    
                    </Grid>
                </Grid>
                <Box sx={{width: "fit-content", margin: "auto", marginBottom: "56px"}}>
                    <Link to={"/projects"}
                        style={{
                            textDecoration: "none",
                            marginTop: "28px",
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            background: "linear-gradient(93.21deg, #1FABE9 4.85%, #4B3AB0 100%)",
                            padding: "10px 24px",
                            color: "#ffffff",
                            lineHeight: "20px",
                            textTransform: "none ! important",
                            borderRadius: "8px",
                            // border: "1px solid #1A8FC2",
                        }}
                    >
                        View More of our Projects
                    </Link>
                </Box>
            </Box>
            

            {/* FAQ */}

            
            <Box
                sx={{
                    // marginTop: "35px 0 32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginRight: "6px",
                    }}
                ></Box>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: {xs: "28px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "32px", sm: "42px", md: "49px"},
                        textAlign: "center",
                        padding: "20px 0",
                        color: "#0A394E",
                    }}
                >Frequently Asked Questions</Typography>
                <Box
                    sx={{
                        background: `url(${"./images/titleDesign.png"})`,
                        height: "10px",
                        width: "109px",
                        marginLeft: "6px",
                    }}
                ></Box>
            </Box>

            <Box>
                <Box
                    sx={{
                        margin: "auto 5%",
                        paddingBottom: "35px",
                    }}
                >
                    <Grid container spacing={0}>
                        {faqs}
                    </Grid>
                </Box>
            </Box>

            {/* <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button
                    sx={{
                        marginTop: "28px",
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontSize: "16px",
                        padding: "10px",
                        color: "#000000",
                        lineHeight: "20px",
                        textTransform: "none ! important",
                        borderRadius: "8px",
                        border: "1px solid #000000",
                    }}
                >
                    {`Learn more`} <img style={{marginLeft: "6px"}} src="./images/rightArrow.svg" alt=""  />
                </Button>            
            </Box>*/}
            
            {/* Great Clients */}

            <ContactUs />
            
            <Footer />
        </Box>
    );
}
 
export default Home;