const express = require("express")
const mongoose = require("mongoose")
    //import body-parser
const bodyParser = require("body-parser")

const Match = require("./models/match")
const Player = require("./models/player")

//create instance of express in app 
const app = express()

// Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//Connect to database
mongoose.connect('mongodb://localhost:27017/meanSoccer22', { useNewUrlParser: true, useUnifiedTopology: true });
//Integration bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//CRUD MATCH
app.get('/api/matches', (req, res) => {
    Match.find((err, docs) => {
        if (err) {
            console.log("error")
        } else {
            res.status(200).json({
                matches: docs
            })

        }
    })
})
app.get(('/api/matches/:id'), (req, res) => {
    let id = req.params.id;
    Match.findOne({ _id: id }).then((doc) => {
        if (doc) {
            res.status(200).json({
                match: doc
            })
        } else {
            console.log("error")
        }
    })
})
app.post('/api/matches', (req, res) => {
    console.log("req.body", req.body)
    let match = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
    })
    console.log("save", match)
    match.save();
    res.status(200).json({
        message: "match created"
    })
})
app.delete('/api/matches/:id', (req, res) => {
    console.log("here in delete match");
    let id = req.params.id;
    Match.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "Match deleted with succes"
                })
            }
        })

})
app.put('/api/matches/:id', (req, res) => {
        console.log("here in update match")
        let match = {
            _id: req.body._id,
            teamOne: req.body.teamOne,
            teamTwo: req.body.teamTwo,
            scoreOne: req.body.scoreOne,
            scoreTwo: req.body.scoreTwo,

        }
        Match.updateOne({ _id: req.params.id }, match).then(
            (result) => {
                if (result) {
                    res.status(200).json({
                        message: "match updated with succes"
                    })
                } else {
                    console.log("error in DB")
                }
            }
        )
    })
    //CRUD player
app.get('/api/players', (req, res) => {
    Player.find((err, docs) => {
        if (err) {
            console.log("error")
        } else {
            res.status(200).json({
                players: docs
            })

        }
    })
})
app.get(('/api/players/:id'), (req, res) => {
    let id = req.params.id;
    Player.findOne({ _id: id }).then((doc) => {
        if (doc) {
            res.status(200).json({
                player: doc
            })
        } else {
            console.log("error")
        }
    })
})
app.post('/api/players', (req, res) => {
    console.log("req.body", req.body)
    let player = new Player({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        post: req.body.post,
        team: req.body.team,
        nTshirt: req.body.nTshirt,
        dateOfBirth: req.body.dateOfBirth

    })
    console.log("save", player)
    player.save();
    res.status(200).json({
        message: "player created"
    })
})
app.delete('/api/players/:id', (req, res) => {
    console.log("here in delete player");
    let id = req.params.id;
    Player.deleteOne({ _id: id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "player deleted with succes"
                })
            }
        })

})
app.put('/api/players/:id', (req, res) => {
    console.log("here in update player", req.body)
    let player = {
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        post: req.body.post,
        team: req.body.team,
        nTshirt: req.body.nTshirt,
        dateOfBirth: req.body.dateOfBirth

    }
    console.log("player", player)
    Player.updateOne({ _id: req.params.id }, player).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "player updated with succes"
                })
            } else {
                console.log("error in DB")
            }
        }
    )
})

//export app 
//doit etre la derniere ligne 
module.exports = app;