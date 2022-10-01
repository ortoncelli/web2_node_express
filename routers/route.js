const express = require('express');
const controllerReceita = require('../controllers/controllerReceita');
const route = express.Router();

module.exports = route;


route.get("/home",function(req,res){
    res.render('home');
});
route.get("/",function(req,res){
  res.render('home');
});

//Controller Receita
//Receita-CRUD
route.get("/receitaCreate", controllerReceita.getCreate);
route.post("/receitaCreate",controllerReceita.postCreate);
route.get("/receitaList", controllerReceita.getList);
route.get("/receitaEdit/:id", controllerReceita.getEdit);
route.post("/receitaEdit",controllerReceita.postEdit);
route.get("/receitaDelete/:id", controllerReceita.getDelete);