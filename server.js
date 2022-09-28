const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./server/schema/schema')
const port = process.env.PORT || 3000;
const connectDB = require('./server/config/db')
const colors = require('colors')
const cors = require('cors')
const path = require('path');


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

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context
    })
  );

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, console.log(`server running on ${port}`))