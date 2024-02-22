require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// for level 5 encryption
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const path = require("path")
// level 6 
const findOrCreate = require("mongoose-findorcreate")

const app = express();

app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV==="production"){

    app.use(express.static(path.join(__dirname,"client","build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client","build","index.html"));
    })
}
app.use(express.json())

const corsOption = {
    origin: [
        "http://localhost:3000"
    ],
    // credentials: true,
    optionSuccessStatus: 200
}
app.options("*", cors())

app.use(cors(corsOption))
app.use(cors({methods: ["GET", "POST"]}))

// level 5
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

const url = process.env.MONGOOSE_URL_ATLAS

mongoose.connect(url);

const blogsSchema = new mongoose.Schema({
    title: String,
    img: String,
    intro: String,
    subheadings: Array,
    link: String,
    summary: String,
});
const projectsSchema = new mongoose.Schema({
    title: String,
    img: String,
    intro: String,
    subheadings: Array,
    link: String,
    summary: String,
});
const subscribersSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Blogs = mongoose.model("blog", blogsSchema);
const Projects = mongoose.model("project", projectsSchema);
const Subcribers = mongoose.model("subscriber", subscribersSchema);


app.route("/blogs")
    .post((req, res) => {
        Blogs.find( (err, result) => {
            if(err) {
                res.status(200).json({success: false, err: err,})
            } else {
                if(result) {
                    res.status(200).json({success: true, data: result})
                } else {
                    res.status(200).json({success: false, data: result})
                    
                }
            }
        })
    })


app.route("/projects")
    .post((req, res) => {
        Projects.find( (err, result) => {
            if(err) {
                res.status(200).json({success: false, err: err,})
            } else {
                if(result) {
                    res.status(200).json({success: true, data: result})
                } else {
                    res.status(200).json({success: false, data: result})
                    
                }
            }
        })
    })


app.route("/subscribe")
    .post((req, res) => {
        Subcribers.find({email: req.body.email}, (err, result) => {
            if(err) {
                res.status(200).json({success: false, err: err,})
            } else {
                if(result.length > 0) {
                    res.status(200).json({success: false, exists: true, data: result})
                } else {
                    const newSubsciber = new Subcribers({
                        name: req.body.name,
                        email: req.body.email
                    })
                    newSubsciber.save((err, result) => {
                        if(err) {
                            res.status(200).json({success: false, err: err,})
                        } else {
                            if(result) {
                                res.status(200).json({success: true, data: result})                                
                            }
                        }
                    });
                    
                }
            }
        })
    })


app.route("/projects/:id")
    .post((req, res) => {
        Projects.findOne({_id: req.params.id}, (err, result) => {
            if(err) {
                res.status(200).json({success: false, err: err,})
            } else {
                if(result) {
                    res.status(200).json({success: true, data: result})
                } else {
                    res.status(200).json({success: false, data: result})
                    
                }
            }
        })
    })


app.route("/blogs/:id")
    .post((req, res) => {
        Blogs.findOne({_id: req.params.id}, (err, result) => {
            if(err) {
                res.status(200).json({success: false, err: err,})
            } else { 
                if(result) {
                    res.status(200).json({success: true, data: result})
                } else {
                    res.status(200).json({success: false, data: result})
                    
                }
            }
        })
    })


port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server started on port " + port);
})