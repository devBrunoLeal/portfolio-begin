const express = require('express');     
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data")

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/",function(req, res) {
      const about = {
          avatar_url: "",
          name: "Bruno Leal",
          role: "Atualmente Digitalizador - Stoque Soluções Tecnológicas",
          description:'Programador em evolução! <br> Bons conhecimentos em HTML5, CSS3 e JavaScript <br> Interesse nas ferramentas Node.js, ReactJS e React Native. <br> Estudante de Sistemas da Informação PUCMINAS. ',
          link: [
              { name: "Linkedin", url: "www.google.com.br"},
              { name: "Github", url: "www.google.com.br" }
          ]

      }


       return res.render("about", { about })
})
server.get("/Grid",function(req, res) {
    return res.render("Grid",{items: videos})
})

server.listen(5000, function(){
    console.log("server is running")
});



