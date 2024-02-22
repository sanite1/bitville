import { Box, TextField, Typography } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { useState } from "react";

const ContactUs = () => {

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
        setLoading(true)
    }

    const textStyle = {
        "& .MuiInputBase-input": {
            border: "2px solid white",
            outline: "none", 
            borderRadius: "5px",
            color: "white",                            
        },                            
        "& .MuiFormHelperText-root": {                 
            color: "red !important",
        },                            
        "& .Mui-active": {        
            border: "2px solid white",
            outline: "none", 
            borderRadius: "5px",
            color: "white",                               
        },                            
        "& .Mui-focused" : {                    
            color: "red",
        },
        marginBottom: "24px"
    }

    return ( 
        <Box
            sx={{
                width: {xs: "100%", sm: "85%", md: "80%"},
                margin: "100px auto",
                background: "#105675",
                borderRadius: "20px",
                padding: {xs: "65px 5% 65px", sm: "100px 10% 65px", md: "135px 10% 65px"},
                boxSizing: "border-box",
            }}
        >
            <Typography
                sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: {xs: "28px", sm: "36px", md: "40px"},
                    lineHeight: "49px",
                    marginBottom: "20px",
                    color: "#ffffff",
                    textAlign: "center",
                }}
            >Send us a message</Typography>
            <Typography
                sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "27px",
                    marginBottom: "20px",
                    color: "#ffffff",
                    textAlign: "center",
                }}
            > Submit the details and we’ll contact you within 24 hours</Typography>
            <Typography
                sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    // marginBottom: "20px",
                    color: "#ffffff",
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
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#ffffff",
                }}
            >Company Name</Typography>
            <Controller
                name="companyName"
                control={control}
                defaultValue=""
                render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                }) => (
                    <TextField
                    variant="outlined"
                    sx={textStyle}
                    placeholder="Type company name here"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                        trigger("companyName");
                    }}
                    />
                )}
            />
            <Typography
                sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#ffffff",
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
            <Typography
                sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#ffffff",
                }}
            >Message</Typography>
            <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                }) => (
                    <TextField
                    variant="outlined"
                    sx={textStyle}
                    placeholder="Type your message here"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                        trigger("message");
                    }}
                    />
                )}
            />

            <Box sx={{display: "flex", justifyContent: "end"}}>
                <LoadingButton
                    size="small"
                    onClick={handleSubmit(handleLoadClick)}
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
                        boxShadow: "0 !important",
                        textTransform: "none ! important",
                        borderRadius: "20px", 
                        padding: "10px 30px"
                    }}
                >
                    Submit
                </LoadingButton>
            </Box>
        </Box>
     );
}
 
export default ContactUs;