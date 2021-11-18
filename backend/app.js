//import express module
const express = require('express');
// create express application
const app = express();
// import body parser module
const bodyParser = require("body-parser");
//import mongoose module
const mongoose = require('mongoose');
//connect if exist else create db
mongoose.connect('mongodb://localhost:27017/sportDB');
//import match Model
const Match = require('./models/match');
//import player Model
const Player = require('./models/player');
//import team Model
const Team = require('./models/team');
//import user Model
const User = require('./models/user');
//import bcrypt module
const bcrypt = require('bcrypt');
//import path module
const path = require('path');
//import multer module
const multer = require('multer');
const { url } = require('inspector');

//utiliser les chemins comme un alias
app.use('/images', express.static(path.join('backend/images')));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(//les methode/types accepté en header de requete
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(//les actions accepté en requete
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

//multer configuration
//type media à accepter
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }

 const storageConfig = multer.diskStorage({
    //il va sauvegarder l'image dans cettte destination après la modif de son nom
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
    }
    cb(null, 'backend/images')
    },
    // c'est pour la modif de nom de l'image
    filename: (req, file, cb) => { //cb : call back
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
    cb(null, imgName);
    }
 });

// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));


//* ******************************** Matches *************************** */
// Business Logic: Get All Matches
app.get('/matches',(req,res)=>{// when i receive request avec action GET à ladresse http://localhost:3000/matches
  console.log('here into get all matches');
  // let  matches =  [
  //   {id:1, teamOne:"FCB", teamTwo:"RMD",scoreOne:"2",scoreTwo:"3"},
  //   {id:2, teamOne:"Juv", teamTwo:"ATM",scoreOne:"3",scoreTwo:"1"},
  //   {id:3, teamOne:"EST", teamTwo:"CA",scoreOne:"0",scoreTwo:"0"},
  //   {id:4, teamOne:"TUN", teamTwo:"EGY",scoreOne:"4",scoreTwo:"2"}
  //  ];
  // res.status(200).json(matches);

  Match.find((err,docs)=>{
    if (err) {
      console.log("Eroor with DB")
    } else {
      res.status(200).json({matchesRes:docs});
    }
  });
  //  res.status(200).json({matchesRes:matches});
});
// Business Logic: Get Match by id
app.get('/matches/:id',(req,res)=>{
  console.log('here into get matche by id', req.params.id);
  Match.findOne({_id:req.params.id}).then(
    (result)=>{
      console.log('Result after delete', result);
      if (result) {
        res.status(200).json({findedMatch: result})
      }
    });
});
// Business Logic: dalete Match by id
app.delete('/matches/:id',(req,res)=>{
  console.log('here into delete matche by id',req.params.id);
  Match.deleteOne({_id:req.params.id}).then(
    (result)=>{
      console.log('Result after delete', result);
      if (result) {
        res.status(200).json({message: 'Delete with success'})
      }
    });
});
// Business Logic: add Match
app.post('/matches',(req,res)=>{
  console.log('here into add matche', req.body);
  const match = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo
  });
  match.save((err,result)=>{
    console.log('Error', err);
    console.log('Result',result);
    if (result){
      res.status(200).json({message:'Added with success'});
    }
  });
});
// Business Logic: edit Match by id
app.put('/matches/:id',(req,res)=>{
  console.log('here into edit matche by id');
  Match.updateOne({_id:req.params.id},req.body).then(
    (result)=>{
      console.log('Result after update', result);
      if (result) {
        res.status(200).json({message: 'update with success'})
      }
    }
  )
});


//* ******************************** Players *************************** */
// Business Logic: Get All Players
app.get('/players',(req,res)=>{// when i receive request avec action GET à ladresse http://localhost:3000/matches
  console.log('here into get all Players');
  Player.find((err,docs)=>{
    if (err) {
      console.log("Eroor with DB")
    } else {
      res.status(200).json({playersRes:docs});
    }
  });
});
// Business Logic: Get Player by id
app.get('/players/:id',(req,res)=>{
  console.log('here into get Player by id', req.params.id);
  Player.findOne({_id:req.params.id}).then(
    (result)=>{
      console.log('Result after delete', result);
      if (result) {
        res.status(200).json({findedPlayer: result})
      }
    });
});
// Business Logic: dalete Player by id
app.delete('/players/:id',(req,res)=>{
  console.log('here into delete player by id');
  Player.deleteOne({_id:req.params.id}).then(
    (result)=>{
      console.log('Result after delete', result);
      if (result) {
        res.status(200).json({message: 'Delete with success'})
      }
    });
});
// Business Logic: add Player
app.post('/players',(req,res)=>{
  console.log('here into add player', req.body);
  const player = new Player({
    name: req.body.name,
    age: req.body.age,
    nbr: req.body.nbr,
    post: req.body.post
  });
  player.save((err,result)=>{
    console.log('Error', err);
    console.log('Result',result);
    if (result){
      res.status(200).json({message:'Added with success'});
    }
  });
});
// Business Logic: edit player by id
app.put('/players/:id',(req,res)=>{
  console.log('here into edit player by id');
  Player.updateOne({_id:req.params.id},req.body).then(
    (result)=>{
      console.log('Result after update', result);
      if (result) {
        res.status(200).json({message: 'update with success'})
      }
    }
  )
});


//* ******************************** Teams *************************** */
// Business Logic: Get All Teams
app.get('/teams',(req,res)=>{// when i receive request avec action GET à ladresse http://localhost:3000/matches
  console.log('here into get all Teams');
  Team.find((err,docs)=>{
    if (err) {
      console.log("Eroor with DB")
    } else {
      res.status(200).json({teamsRes:docs});
    }
  });
});
// Business Logic: Get Team by id
app.get('/teams/:id',(req,res)=>{
  console.log('here into get Team by id', req.params.id);
  Team.findOne({_id:req.params.id}).then(
    (result)=>{
      console.log('Result after delete', result);
      if (result) {
        res.status(200).json({findedTeam: result})
      }
    });
});
// Business Logic: dalete Team by id
app.delete('/teams/:id',(req,res)=>{
  console.log('here into delete Team by id');
  Team.deleteOne({_id:req.params.id}).then(
    (result)=>{
      console.log('Result after delete', result);
      if (result) {
        res.status(200).json({message: 'Delete with success'})
      }
    });
});
// Business Logic: add Team
app.post('/teams',(req,res)=>{
  console.log('here into add Team', req.body);
  const team = new Team({
    foundation: req.body.foundation,
    name: req.body.name,
    owner: req.body.owner,
    staduim: req.body.staduim
  });
  team.save((err,result)=>{
    console.log('Error', err);
    console.log('Result',result);
    if (result){
      res.status(200).json({message:'Added with success From BE'});
    }
  });
});
// Business Logic: edit Team by id
app.put('/teams/:id',(req,res)=>{
  console.log('here into edit Team by id');
  Team.updateOne({_id:req.params.id},req.body).then(
    (result)=>{
      console.log('Result after update', result);
      if (result) {
        res.status(200).json({message: 'update with success'})
      }
    }
  )
});


//* ******************************** SignUp & Login *************************** */
//Business logic: Signup
app.post('/users/signup', multer({ storage: storageConfig }).single('img'), (req,res)=> {
  console.log('Here into signup BE', req.body);
  bcrypt.hash(req.body.pwd, 10).then(
    (cryptedPwd)=> {
      let url = req.protocol + '://' + req.get('host'); //construire URL (http/https + Nom Domaine): http://localhost:3000
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: cryptedPwd,
        img: url + '/images/' + req.file.filename
      });
      user.save((err,result)=>{
        if (err){
          console.log('Error', err);
        }else{
          console.log('Result',result);
          res.status(200).json({message:'User Added with success From BE'});
        }
      });
    }
  )
})
// Business Logic: Login
app.post('/users/login', (req, res) => {
  console.log('Here into Login BE', req.body);
  User.findOne({ email: req.body.email }).then(
      (emailResult) => {
          console.log('Email Result', emailResult);
          console.log('req.body.pwd',req.body.pwd);
          if (!emailResult) {
              res.status(200).json({
                  msg: '0'
              }) //l'execution de ce bloc(app.post('/users/login'...) s'arrete ici(res.status...) si le condition IF est vrai
          }

          return bcrypt.compare(req.body.pwd, emailResult.pwd); //on doit faire "return" pour que le "then" suivant fonctionne
      }).then(
          (pwdResult) => {
              console.log('pwdResult', pwdResult);
              if (!pwdResult) {
                  res.status(200).json({
                      msg: '1'
                  })
              }
              //Si l'execution arrive ici : donc l'authentification est validé
              User.findOne({ email: req.body.email }).then(//on utilise autre fois cette ligne car on n'a pas d'acces sur la var "emailResult" de 4éme ligne de ce bloc : il faut l'utiliser just dans son bloc function
                  (finalResult)=> {
                      let userToSend = {
                          id: finalResult._id,
                          fName: finalResult.firstName,
                          lName: finalResult.lastName
                      }
                      console.log('User to send BE', userToSend);
                      res.status(200).json({
                          msg: '2',
                          userToSend: userToSend
                      })
                  }
              )
          }
      )
});

//* ******************************** Profile *************************** */
//Business logic: Profile
app.get('/users/find/:id',(req,res)=>{
  console.log('here into profile BE', req.params.id);
  User.findOne({_id:req.params.id}).then(
    (findedUser)=>{
      console.log('Result ', findedUser);
      if (findedUser) {
        res.status(200).json({findedUser: findedUser})
      }
    });
});

//can import app
module.exports = app;
