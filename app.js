const express = require('express')
// express app
const morgan = require('morgan');

const mongoose = require('mongoose');



const blogsRoutes = require('./routes/blogRoutes')
const { result } = require('lodash');
const { render } = require('ejs');

const app = express();

//mongo db
const dbURI = 'mongodb+srv://Harsh:test1234@nodetuts.ikoon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const port = process.env.PORT || 4000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port))
    .catch((err) => console.log(err))


   
// register view engine

app.set('view engine', 'ejs');

// listen for request



//middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



// app.use((req,res,next)=>{

//     console.log('new request made:');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ',req.method);
//     next();
// });


// app.use((req,res,next)=>{

//     console.log('In the next middleware:');
//     next();
// });

app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {

    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', { root: __dirname })


});


// blogs route


app.use('/blogs',blogsRoutes);



//404 error
app.use((req, res) => {

    res.status(404).render('404', { title: '404' });
    //  res.status(404).sendFile('./views/404.html',{root:__dirname});
});






// mongoose and mongo sandbox routes

// app.get('/add-blog',(req,res)=>{

//     const blog = new Blog({
//         title:'new blog2',
//         snippet:'about my new blog',
//         body:'more about my new blog'
//     });


//     blog.save()
//     .then((result)=>{

//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// });


// app.get('/all-blogs',(req,res)=>{

//     Blog.find()
//     .then((result)=>{

//         res.send(result)
//     })
//     .catch((err)=>{

//         console.log(err);
//     });
// })


// app.get('/single-blog',(req,res)=>{

//     Blog.findById('615aef82699ffac34c1e875d')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{

//         console.log(err);
//     });
// })



/*
app.get('/', (req, res) => {

     const blogs = [
        {title:'Yoshi finish eggs',snippet:'lorem ipsum gsfs'},
        {title:'Mario finds stars',snippet:'lorem ipsum gsfs'},
        {title:'HOw to defeat bowser',snippet:'lorem ipsum gsfs'},

     ];
    res.render('index',{title:'Home',blogs});
    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname })
});

*/