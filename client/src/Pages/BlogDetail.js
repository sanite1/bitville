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
import api from "../api/api";

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>


const BlogDetails = () => {

    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    
    const {id} = useParams()
    
    const [blogData, setBlogData] = useState(Blogs.filter((item)=>{return item.id == id}))
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getBlogData = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            const response = await api.post(`/blogs/${id}`)
            if (response.data?.success === false) {
                setLoading(false)
            } else {
                setLoading(false)
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
        getBlogData()
    }, []);

    const sections = data?.subheadings?.map((item, pos) =>{
        return (
            <Box key={pos}>
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: {xs: "24px"},
                        lineHeight: {xs: "36px"},
                        color: "#000000",
                        marginBottom: "10px",
                    }}
                >
                    {item.title}
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
                    {item.body}
                </Typography>

            </Box>
        )
    })
    return (
        <>
        {loading ? "" :
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
                            View Blog
                        </Typography>
                    </Box>

                </Box>
            </Box>
            
            {/* Blog */}

            <Box
                sx={{
                    width: {xs: "90%", md: "70%"},
                    margin: "auto"
                }}
            >
                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: {xs: "32px", sm: "36px", md: "40px"},
                        lineHeight: {xs: "37px", sm: "42px", md: "49px"},
                        marginTop: "10vh",
                        // width: {xs: "90%", md: "40%"},
                        marginBottom: "30px",
                        color: "#000000",
                    }}
                >
                    {data?.title}
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
                    {data?.intro}
                </Typography>

                {sections}

                <Typography
                    sx={{
                        fontFamily: `${"Montserrat"}, sans-serif`,
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: {xs: "24px"},
                        lineHeight: {xs: "36px"},
                        color: "#44B9ED",
                        marginBottom: "10px",
                    }}
                >
                    In summary
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
                    {data?.summary}
                </Typography>
            </Box>
            
            <Footer />
        </Box>
        }
        </>
    );
}
 
export default BlogDetails;