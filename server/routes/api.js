const express = require('express');
const router = express.Router();
const fs = require("fs");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // let user = { userName: "Nyble", profilePicture: "https://cdn.discordapp.com/avatars/324656814144749570/16d55947242beb75971aedc005f92ef5.png",
    //     bannerPicture: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/17759670_10213139876788923_1837221435293834794_n.jpg?oh=175e51eea89a3afc04c85ddc55979380&oe=5A6C9D87" };
    // db.collection("users").insertOne(user, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted!");
    //   db.close();
    // });
});

/* GET api listing. */
router.get('/search/:userName', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let query = {userName: req.params.userName};
        console.log(query);
        db.collection("users").findOne(query, function(err, result) {
            if (err) throw err;
            if(!result) {
                res.status(500);
                res.send({error: "User not found!"});
            }
            else {
                res.send(result);
            }
            
            db.close();
        });
    }); 
  
});

module.exports = router;