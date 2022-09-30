const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./server/schema/schema')
const port = process.env.PORT || 3000;
const connectDB = require('./server/config/db')
const colors = require('colors')
const cors = require('cors')
const path = require('path');
const { expressjwt: jwt } = require("express-jwt");
const router = require('express').Router();
const mongoose = require('mongoose')
const User = require('./server/models/User')
const { signToken } = require('./server/utils/auth');

const app = express();

connectDB()

app.use(cors())

const context = async () => {
    const db = await connectDB();
  
    return { db };
  };

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'production',

// })) 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get(
//   "/path",
//   jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] }),
//   function (req, res) {

    
//     if (!req.auth.admin) return res.sendStatus(401);
//     res.sendStatus(200);
//   }
// );


// const name ='bob' 
// const email = 'bob@email.com'
// const password = 'bob'

// const user = User.create({ name, email, password });

// const token = signToken(user);
// console.log(token)


app.get('/path', (req, res) => {
  console.log(req.body)
  User.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
app.post('/path', (req, res) => {
  console.log("REQ BODY:",req.body)
  // res.send(req.body)
  });



  // User.findOne({req}, (err, result) => {
  //   if (result) {
  //     res.status(200).json(result);
  //   } else {
  //     console.log('Uh Oh, something went wrong');
  //     res.status(500).json({ message: 'something went wrong' });
  //   }
  // });
});

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context
    })
  );


// app.use(express.static('public'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.listen(port, console.log(`server running on ${port}`))