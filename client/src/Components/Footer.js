import { Box, Grid, TextField, Typography } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import insta  from "./images/insta.svg" 
import twitter  from "./images/twitter.svg" 
import facebook  from "./images/facebook.svg" 
import phone  from "./images/phone.svg" 
import email  from "./images/email.svg" 
import about  from "./images/about.svg" 
import projects  from "./images/projects.svg" 
import blog  from "./images/blog.svg" 
import terms  from "./images/terms.svg" 
import privacy  from "./images/privacy.svg" 
import claim  from "./images/claim.svg" 

const Footer = () => {  
    
    const date = new Date()

    return ( 
        <Box
            sx={{
                background: "#0A394E",
                padding: {xs: "45px 5% 65px"},
                boxSizing: "border-box",
            }}
        >
            <Grid container>
                <Grid item xs={6} md={3}>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "24px",
                            lineHeight: "36px",
                            fontWeight: 700,
                            color: "#CFCFCF",
                            marginBottom: "12px"
                        }}
                    >Social Media</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={insta} alt="" /> Bitvilleofficial</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={twitter} alt="" /> bitvile_official</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={facebook} alt="" />Bitville Technologies</Typography>

                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "24px",
                            lineHeight: "36px",
                            fontWeight: 700,
                            color: "#CFCFCF",
                            marginBottom: "12px"
                        }}
                    >Contacts</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={phone} alt="" /> +2348149650119</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={email} alt="" /> info@bitville.com</Typography>
                    
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "24px",
                            lineHeight: "36px",
                            fontWeight: 700,
                            color: "#CFCFCF",
                            marginBottom: "12px"
                        }}
                    >Links</Typography>
                    
                    <Link style={{ textDecoration: "none", color: "inherit"}} to={"/about"}>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontWeight: 500,
                                color: "#CFCFCF",
                                marginBottom: "24px",
                                display: "flex",
                                alignContent: "center"
                            }}
                        ><img style={{marginRight: "9px"}} src={about} alt="" /> About</Typography>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "inherit"}} to={"/projects"}>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontWeight: 500,
                                color: "#CFCFCF",
                                marginBottom: "24px",
                                display: "flex",
                                alignContent: "center"
                            }}
                        ><img style={{marginRight: "9px"}} src={projects} alt="" /> Projects</Typography>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "inherit"}} to={"/blogs"}>
                        <Typography
                            sx={{
                                fontFamily: `${"Montserrat"}, sans-serif`,
                                fontStyle: "normal",
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontWeight: 500,
                                color: "#CFCFCF",
                                marginBottom: "24px",
                                display: "flex",
                                alignContent: "center"
                            }}
                        ><img style={{marginRight: "9px"}} src={blog} alt="" />Blogs</Typography>
                    </Link>

                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "24px",
                            lineHeight: "36px",
                            fontWeight: 700,
                            color: "#CFCFCF",
                            marginBottom: "12px"
                        }}
                    >Legal</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={terms} alt="" /> Terms</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={privacy} alt="" /> Privacy</Typography>
                    <Typography
                        sx={{
                            fontFamily: `${"Montserrat"}, sans-serif`,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "#CFCFCF",
                            marginBottom: "24px",
                            display: "flex",
                            alignContent: "center"
                        }}
                    ><img style={{marginRight: "9px"}} src={claim} alt="" />Claim</Typography>

                </Grid>
                
            </Grid>
            <Box 
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px"
                }}
            >
                <Typography sx={{color: "gray"}}>
                    Ⓒ Copyright {date.getFullYear()}. Bitville Technologies | All Rights Reserved
                </Typography>
            </Box>
        </Box>
     );
}
 
export default Footer;