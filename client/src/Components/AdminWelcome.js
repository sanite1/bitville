import Box from "@mui/material/Box"
import { Typography, } from "@mui/material";
// import { Fragment, useState } from "react";

// import AccountView from "../Components/AccountView";
import { useEffect } from "react";


const AdminWelcome = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", marginTop: {xs: "10vh", md: "0vh"},fontWeight: "700", fontSize: "36px", color: "#ffffff"}}
            >
                Welcome Admin
            </Typography>
            <Box
                sx={{
                    background: "#fff",
                    width: "100%",
                    height: "70vh",
                    borderRadius: "20px",
                    padding: "20px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                >
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "#000",
                        fontSize: "30px",
                        lineHeight: "38px",
                        // width
                    }}
                >
                    Get Started With Making Changes
                </Typography>
            </Box>
        </Box>
    );
}
 
export default AdminWelcome;