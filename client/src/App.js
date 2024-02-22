import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import AboutUs from "./Pages/AboutUs";
import WhatWeDo from "./Pages/WhatWeDo";
import ContactUs from "./Pages/ContactUs";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetail";
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/ProjectDetail";
import Login from './Pages/Login';
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import ErrorPage from "./Pages/ErrorPage";
import AdminHome from "./Components/AdminSidebar";
import AdminBlogs from "./Pages/AdminBlogs";
// import Signup from "./Pages/Signup";

function App() {

  return (
      <div className="App">
      
        <div className="">
            <Router>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<AboutUs />} />
                  <Route exact path="/what-we-do" element={<WhatWeDo />} />
                  <Route exact path="/contact-us" element={<ContactUs />} />
                  <Route exact path="/blogs" element={<Blogs />} />
                  <Route exact path="/blogs/:id" element={<BlogDetails />} />
                  <Route exact path="/projects" element={<Projects />} />
                  <Route exact path="/projects/:id" element={<ProjectDetails />} />
                  <Route exact path="/admin/login" element={<Login/>} />
                  {/* <Route exact path="/signup" element={<Signup />} /> */}
                  <Route element={<ProtectedRoutes />}>

                      {/* <Route exact path="/admin/:menu" element={<AdminHome/>} /> */}
                      <Route exact path="/admin/blogs" element={<AdminBlogs/>} />
                      <Route exact path="/admin/projects" element={<AdminHome/>} />
                      <Route exact path="/admin/settings" element={<AdminHome/>} />
                      <Route path="*" element={<ErrorPage/>} />
                      
                  </Route>

                </Routes>
            </Router>
        </div>
        
      </div>
  );
}

export default App;