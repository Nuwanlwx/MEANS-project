const express =require('express');
const bodyParser = require('body-parser');
//Import the mongoose module
const mongoose =require('mongoose');

const Post =require('./models/post');

const app = express();

//
mongoose.connect('mongodb+srv://nuwanlwx:vVbfkESmq0iZNtFG@cluster0-bsyij.mongodb.net/node-angular?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
//

// mongoose.connect('mongodb+srv://nuwanlwx:vVbfkESmq0iZNtFG@cluster0-bsyij.mongodb.net/node-angular?retryWrites=true&w=majority',{ useNewUrlParser: true })
 .then(()=>{
    console.log('Connected to database!')
 })
 .catch(()=>{
    console.log('Connection failed!')
 });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use((req,res,next) => {
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Request-With,Content-Type,Accept'
);
res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PATCH,DELETE,OPTIONS'
);
next();
});
// vVbfkESmq0iZNtFG
app.post('/api/posts',(req,res,next)=>{
 const post= new Post({
     title:req.body.title,
     content:req.body.content 
 });
 post.save();
 console.log(post)
 res.status(201).json({
     message: "Post fetched successfully!"
 });
});

app.use('/api/posts',(req,res,next)=>{
    const posts = [
        { id:'11312ccxcccxc',
        title:'First server side post',
        content:'This is comming from server'
        },
        { id:'12345ccxcccxc',
        title:'Second server side post',
        content:'This is second comming from server!'
        }
    ];
    res.status(200).json({
      message:'Posts feteched succesfully!',
      posts:posts  
    });
});


module.exports = app;