import Box from "@mui/material/Box"
import {  AppBar, aToolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton, Grid } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import FAQs from "../Data/Faqs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Blogs from "../Data/Blogs";import { TextField } from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SendIcon from '@mui/icons-material/Send';

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { Link } from "react-router-dom";
import api from "../api/api";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>


const Home = () => {

    // let navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLoading(false)
    };

    const [loadingB, setLoadingB] = useState(false);
    const [data, setData] = useState([]);

    const getBlogs = async (data) => {
        console.log(data);
        setLoadingB(true);
        try {
            const response = await api.post("/blogs")
            if (response.data?.success === false) {
                setLoadingB(false)
            } else {
                setData(response.data.data) 
            }
        } catch(err) {
            setLoadingB(false)
            if(err.response) {
                setLoadingB(false)
            }
        }
    }

    const [openD, setOpenD] = useState(false);

    const handleClickOpenD = () => {
        setOpen(true);
    };

    const handleCloseD = () => {
        setOpen(false);
    };

    const [loadingS, setLoadingS] = useState(false);
    // const [data, setData] = useState([]);

    const subscribe = async (data) => {
        console.log(data);
        setLoadingS(true);
        try {
            const response = await api.post("/blogs")
            if (response.data?.success === false) {
                setLoadingS(false)
            } else {
                // setData(response.data.data) 
                setLoadingS(false)
            }
        } catch(err) {
            setLoadingS(false)
            if(err.response) {
                setLoadingS(false)
            }
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        getBlogs()
    }, []);

    

    
    const blogCards = data?.map((item, pos) => {
        return(
            <Grid key={item.id} item sm={12} md={4}>
                <Box sx={{boxShadow: "0", marginTop: "50px"}}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            padding: "16px",
                        }}
                    >
                        <Link to={item.link} style={{textDecoration: "none", color: "inherit", position: "relative"}}>
                            <img style={{width: "100%"}} src={item.img} alt="client1" />
                            <Box
                                sx={{
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "space-between",
                                    height: "300px",
                                    position: "absolute",
                                    bottom: "0",
                                    width: "100%",
                                    padding: "0 5%",
                                    margin: "auto",
                                    background: "linear-gradient(359.5deg, #1E1E1E 10.87%, rgba(129, 129, 129, 0.561159) 36.79%, rgba(255, 255, 255, 0) 49.96%)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: `${"Montserrat"}, sans-serif`,
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: "24px",
                                        lineHeight: "36px",
                                        color: "#ffffff",
                                        width: "100%",
                                        margin: "28px 0 18px",
                                        padding: "0 5%",
                                        boxSizing: "border-box",
                                        textAlign: "left",
                                        position: "absolute",
                                        bottom: "0",
                                        left: "0",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                
                            </Box>
                        </Link>
                        
                        
                    </Box>
                </Box>
            </Grid>
        )
    })

    const schema = yup.object().shape({
        name: yup.string().required("Name Is required"),
        companyName: yup.string().required("Company name Is required"),
        email: yup.string().required("Email Is required"),
        message: yup.string().required("Message Is required"),        
    });

    const { handleSubmit, trigger, control } = useForm({
        resolver: yupResolver(schema),
    });
    const [loading, setLoading] = useState(false);

    const handleLoadClick = async (data) => {
        console.log("Selected");
        setLoading(true)
        setOpen(true);
    }

    const textStyle = {
        "& .MuiInputBase-input": {
            border: "2px solid white",
            outline: "none", 
            borderRadius: "5px",
            color: "black",                            
        },                            
        "& .MuiFormHelperText-root": {                 
            color: "red !important",
        },                            
        "& .Mui-active": {        
            border: "2px solid #8FD5F4",
            outline: "none", 
            borderRadius: "5px",
            color: "black",                               
        },                            
        "& .Mui-focused" : {                    
            color: "red",
        },
        marginBottom: "24px"
    }


    
    return (
        <Box
            sx={{
                // height: "100vh",
                // background: "#000000"
            }}
        >
            <Navbar />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" 
                            sx={{
                                margin: "30px auto",
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: {xs: "32px"},
                                lineHeight: {xs: "37px"},
                                textAlign: {xs: "center"},
                                // paddingTop: "20vh",
                                // width: {xs: "90%", md: "40%"},
                                color: "#1A8EC2",
                            }}>
                        Successfully Signed Up
                        <Button
                            onClick={handleCloseD}
                            sx={{
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
                            Okay
                        </Button>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" d>
                        <Typography
                            sx={{
                                margin: "30px auto",
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: {xs: "32px"},
                                lineHeight: {xs: "37px"},
                                textAlign: {xs: "center"},
                                // paddingTop: "20vh",
                                // width: {xs: "90%", md: "40%"},
                                color: "#1A8EC2",
                            }}
                        >
                            You are now our Subscriber!
                        </Typography>
                        <Typography
                            
                            sx={{
                                margin: "30px auto",
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: {xs: "16px"},
                                lineHeight: {xs: "24px"},
                                textAlign: {xs: "center"},
                                // paddingTop: "20vh",
                                width: {xs: "90%", md: "70%"},
                                color: "#105675",
                            }}
                        >
                            Thank you for subscribing to our newsletter. We will We promised not to SPAM you. You now have access to latest updates and news from Bitville.
                        </Typography>
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Typography
                                onClick={handleClose}
                                variant="contained"
                                sx={{
                                    margin: "30px auto",
                                    fontFamily: `${"Montserrat"}, sans-serif`,
                                    fontSize: "20px",
                                    background: "#8FD5F4",
                                    color: "#000000",
                                    "&:hover": {
                                        backgroundColor: '#8FD5F4',
                                        cursor: "pointer"
                                    },
                                    boxShadow: "0 ! important",
                                    textTransform: "none ! important",
                                    borderRadius: "5px",
                                    padding: "5px 50px"
                                }}
                            >
                                Okay
                            </Typography>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
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
                        We write amazing stuff!
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
                        Here you can read industry news and the Bitville team's latest insights into the world of technology
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
                            Check out our blogs
                        </Typography>
                    </Box>

                </Box>
            </Box>

            
            {/* FAQ */}

            <Box>
                <Box
                    sx={{
                        margin: "auto 5%",
                        paddingBottom: "35px",
                    }}
                >
                    <Grid container spacing={0}>
                        {blogCards}
                    </Grid>
                </Box>
            </Box>

            
            {/* Great Clients */}
            <Box
                sx={{
                    width: {xs: "90%", sm: "75%", md: "50%"},
                    margin: "50px auto",
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: {xs: "65px 5% 65px"},
                    boxSizing: "border-box",
                    border: "2px solid #8FD5F4"
                }}
            >
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {xs: "28px"},
                        lineHeight: "34px",
                        marginBottom: "20px",
                        color: "#0A394E",
                        textAlign: "center",
                    }}
                >Subscribe to our News Letter</Typography>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        marginBottom: "20px",
                        color: "#5F5F5F",
                        textAlign: "center",
                    }}
                >Get the latest updates from Bitville when you subscribe today</Typography>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        marginBottom: "20px",
                        color: "#5F5F5F",
                        textAlign: "center",
                    }}
                >We promise not to SPAM you</Typography>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                        // marginBottom: "20px",
                        color: "black",
                        // textAlign: "center",
                    }}
                > Name</Typography>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { ref, ...fields },
                        fieldState: { error },
                    }) => (
                        <TextField
                        variant="outlined"
                        sx={textStyle}
                        placeholder="Sanni Collins"
                        fullWidth
                        {...fields}
                        inputRef={ref}
                        error={Boolean(error?.message)}
                        helperText={error?.message}
                        onKeyUp={() => {
                            trigger("name");
                        }}
                        />
                    )}
                />
                
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "black",
                    }}
                >Email</Typography>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({
                        field: { ref, ...fields },
                        fieldState: { error },
                    }) => (
                        <TextField
                        variant="outlined"
                        type="email"
                        sx={textStyle}
                        placeholder="example@gmail.com"
                        fullWidth
                        {...fields}
                        inputRef={ref}
                        error={Boolean(error?.message)}
                        helperText={error?.message}
                        onKeyUp={() => {
                            trigger("email");
                        }}
                        />
                    )}
                />
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <LoadingButton
                        size="small"
                        onClick={handleLoadClick}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontSize: "20px",
                            background: "#8FD5F4",
                            color: "#000000",
                            "&:hover": {
                                backgroundColor: '#8FD5F4'
                            },
                            boxShadow: "0 ! important",
                            textTransform: "none ! important",
                            borderRadius: "20px", 
                            padding: "5px 50px"
                        }}
                    >
                        Subscribe
                    </LoadingButton>
                </Box>
            </Box>
            
            <Footer />
        </Box>
    );
}
 
export default Home;