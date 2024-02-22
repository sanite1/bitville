import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const ErrorPage = ({home}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                background: "white"
            }}
        >
            <Box
                sx={{
                    backdropFilter: "blur(5px)", 
                    zIndex: "555", 
                    width: "100%", 
                    // marginLeft: {xs: "0", md: "25vw"},
                    background: "transparent",
                    position: "fixed",
                    top: 0,
                    display: home ? "none" : ""
                }}
            >
                <Typography
                    variant="h6" 
                    color="inherit" 
                    component="div"
                    sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        color: "white",
                        background: "teal",
                        padding: "2px 6px",
                        borderRadius: "12px",
                        margin: "9px 0",
                        marginLeft: "12px",
                        width: "fit-content",
                    }}
                >
                    S.A
                </Typography>
            </Box>
            <Box
                sx={{textAlign: "center", margin: "auto", paddingTop: "17vh", width: {xs: "90%", md: "60%"}}}

            >
                <Typography
                    variant="h4"
                    sx={{fontFamily: "monospace", textAlign: "center", marginBottom: "5vh"}}
                >
                    Sorry, page not found!
                </Typography>
                <Typography
                    variant="p"
                    sx={{fontFamily: "monospace", textAlign: "center", width: "70%", marginBottom: "50px"}}
                >
                    Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your spelling.
                    <Link style={{decoration: "none", color: "black"}} to={"/home/dashboard"}>Back to home</Link>
                </Typography>

                <img style={{width: "100%", marginTop: "50px"}} src="./images/404.png" alt="" />
            </Box>
        </Box>
    );
}
 
export default ErrorPage;