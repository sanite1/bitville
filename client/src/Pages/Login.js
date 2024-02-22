import { Grid, Typography, TextField, IconButton, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box"
import { useEffect, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Link, useNavigate } from "react-router-dom";


import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../api/api";

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const schema = yup.object().shape({
        username: yup.string().required("Email Is Required"),
        password: yup
        .string()
        .required("Password Is Required")
        
    });

    const { handleSubmit, trigger, control } = useForm({
        resolver: yupResolver(schema),
    });
    const [values, setValues] = useState({
        vertical: "bottom",
        horizontal: "center",
        open: false,
        showPassword: false,
    });
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");

    const handleSnackBar = () => {
        setOpenSnackBar(true);
      };


    const navigate = useNavigate()

    localStorage.setItem('loggedIn', false);

    const [loading, setLoading] = useState(false);

    const handleLoadClick = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            const response = await api.post("/login", data)
            if (response.data?.success === false) {
                setMessageSnackBar("Error occured. Check internet and try again.")
                handleSnackBar()
                setLoading(false)
            } else {
                localStorage.setItem('loggedIn', JSON.stringify(true)); 
                localStorage.setItem('user', JSON.stringify(response.data.user)); 
                navigate("/home/dashboard")

            }
        } catch(err) {
            setLoading(false)
            if(err.response) {
                setLoading(false)
                if(err.response.status === 401) {
                    setMessageSnackBar("Username or password incorrect!")
                    handleSnackBar()
                } else {
                    setMessageSnackBar("Error occured. Check internet and try again.")
                    handleSnackBar()
                }
                // console.log("Error: " + err.response);
            }
        }
    }

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    const textStyle = {
        "& .MuiInputBase-input": {
            border: "2px solid white",
            outline: "none", 
            borderRadius: "5px",
            color: "#000",                            
        },                            
        "& .MuiFormHelperText-root": {                 
            color: "red !important",
        },                            
        "& .Mui-active": {        
            border: "2px solid white",
            outline: "none", 
            borderRadius: "5px",
            color: "#000",                               
        },                            
        "& .Mui-focused" : {                    
            color: "red",
        },
        marginBottom: "24px"
    }

    return (
        <Box
            sx={{
                height: "100vh",
                background: "#262d43",
                // background: "#edeff1",
            }}
        >
            
            <Snackbar color="primary" open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="warning" sx={{ width: '100%', background: "gray" }}>
                    {messageSnackBar}
                </Alert>
            </Snackbar>
            <Grid container >
                
                <Box item md={7} xs={12}
                    sx={{
                        width: {xs: "100%", md: "40%"},
                        margin: "auto",
                        textAlign: "center",
                        marginTop: {xs: "15vh", md: "15vh"},
                        background: "#ffff",
                        padding: "30px 0",
                        borderRadius: "20px"
                    }}
                >
                    <Box 
                        sx={{
                            margin: "auto",
                            width: {xs: "80%", md: "70%"},
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            color="inherit" 
                            component="div"
                            sx={{
                                textAlign: "left",
                                marginBottom: "20px",
                                fontWeight: 600,
                                fontFamily: "monospace",
                                fontSize: "30px",
                                color: "#000"
                            }}
                        >
                            Login 
                        </Typography>
                    

                        <form action="">

                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                    variant="outlined"
                                    sx={textStyle}
                                    label="Email"
                                    fullWidth
                                    {...fields}
                                    inputRef={ref}
                                    error={Boolean(error?.message)}
                                    helperText={error?.message}
                                    onKeyUp={() => {
                                        trigger("username");
                                    }}
                                    />
                                )}
                            />
                            
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                        variant="outlined"
                                        sx={textStyle}
                                        label="Password"
                                        fullWidth
                                        {...fields}
                                        type={values.showPassword ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                            <IconButton onClick={handleClickShowPassword}>
                                                {values.showPassword === true ? (
                                                <Visibility />
                                                ) : (
                                                <VisibilityOff />
                                                )}
                                            </IconButton>
                                            ),
                                        }}
                                        inputRef={ref}
                                        error={Boolean(error?.message)}
                                        helperText={error?.message}
                                        onKeyUp={() => {
                                            trigger("password");
                                        }}
                                    />
                                )}
                            />

                            <Typography 
                                variant="p" 
                                // color="primaru" 
                                component="div"
                                sx={{
                                    textAlign: "left",
                                    color: "teal",
                                    fontFamily: "monospace",
                                    marginBottom: "30px"
                                }}
                            >
                                <Link style={{decoration: "none", color: "#000"}} to={"/signup"}>Forgot Password?</Link>
                            </Typography>

                            <LoadingButton
                                fullWidth
                                size="small"
                                onClick={handleSubmit(handleLoadClick)}
                                endIcon={<SendIcon />}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                sx={{
                                    fontSize: "20px",
                                    background: "#1d202b",
                                    fontFamily: "monospace",
                                    "&:hover": {
                                        backgroundColor: 'teal'
                                    },
                                }}
                            >
                                Login
                            </LoadingButton>
                        </form>

                    </Box>
                </Box>
            </Grid>
        </Box>
    );
}
 
export default Login;