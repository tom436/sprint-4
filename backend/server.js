const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const cookieParser = require('cookie-parser')
const session = require('express-session')

const path = require('path')

const app = express()
const http = require('http').createServer(app);

// Express App Config
app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


const corsOptions = {
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true
};
app.use(cors(corsOptions));

const itemsRoutes = require('./api/items/item.routes')
const shopsRoutes = require('./api/shops/shop.routes')
const authRoutes = require('./api/auth/auth.routes')
const usersRoutes = require('./api/users/user.routes')

//routs
app.use('/api/items', itemsRoutes) 
app.use('/api/shops', shopsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)




const port = process.env.PORT || 3030;

http.listen(port, () => {
    console.log('Server is running on port: ' + port);

    // logger.info('Server is running on port: ' + port)
});
