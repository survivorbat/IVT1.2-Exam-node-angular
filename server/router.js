const express = require('express');
const router = express.Router();
const expressJWT = require('express-jwt'); 
require('dotenv').config();

router.use(expressJWT({ 
    secret: process.env.SECRET_KEY 
}).unless({ 
    path: [
        { url: /\/api*/, methods: ['OPTIONS']  },
        { url: '/api', methods: ['GET']  },
        { url: '/api/token', methods: ['POST']  },
        { url: /\/locations*/, methods: ['GET']  } ,
        { url: /\/rooms*/, methods: ['GET']  } ,
        { url: /\/showings*/, methods: ['GET']  },
        { url: /\/films*/, methods: ['GET']  },
        { url: /\/users*/, methods: ['POST']  },
    ]
}));

const authenticationrouter = require('./routes/authentication');
const userrouter = require('./routes/user');
const filmrouter = require('./routes/film');
const showingrouter = require('./routes/showing');
const locationrouter = require('./routes/location');
const roomrouter = require('./routes/room');
const ticketrouter = require('./routes/ticket');

router.options(/\/api*/, (req,res) => {
    res.status(204).send();
});

router.use("/api/",authenticationrouter);
router.use("/api/users",userrouter);
router.use("/api/films",filmrouter);
router.use("/api/showings",showingrouter);
router.use("/api/locations",locationrouter);
router.use("/api/rooms",roomrouter);
router.use("/api/tickets",ticketrouter);

router.get("/api", (req,res,next) => {
    res.status(200).json({
        message:"Welcome to the Avancinema API! Please, make yourself at home :)",
        routes: [
            {
                resource_name: "",
                url: req.protocol+"://"+req.get('host')+"/api",
            },
            {
                resource_name: "Films",
                url: req.protocol+"://"+req.get('host')+"/api/films",
            },
            {
                resource_name: "Showings",
                url: req.protocol+"://"+req.get('host')+"/api/showings",  
            },
            {
                resource_name: "Locations",
                url: req.protocol+"://"+req.get('host')+"/api/locations",
            },
            {
                resource_name: "Rooms",
                url: req.protocol+"://"+req.get('host')+"/api/rooms",
            },
            {
                resource_name: "Tickets",
                url: req.protocol+"://"+req.get('host')+"/api/tickets",
            },
            {
                resource_name: "Token",
                url: req.protocol+"://"+req.get('host')+"/api/token",
                method: "POST"
            },
        ]
    });
})
router.use((error,req,res,next) => {
    console.log(error);
	res.status(error.status || 500).send({
        message: error.message,
        code: error.code,
        name: error.name,
        status: error.status
	}).end();
});

router.get('*', (req, res) => {
	res.status(404).send({
		message: '404 not found' //To let the caller know his request doesn't have an endpoint
	}).end();
})

module.exports = router;