


const path=require('path');
const cool = require('cool-ascii-faces');
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 5000;
const http=require('http');
const proxy = require("express-http-proxy");

const routes = require('./routes');
//const controllers = require('./controllers');

//server.listen(PORT);
var app=express(); 
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(express.static(path.join(__dirname, 'testHTML5')));
 app.use(express.static(path.join(__dirname, 'node_modules')));
 app.use('/', routes);
 // app.use('/', controllers);
  app.set('views', [path.join(__dirname, 'views'),path.join(__dirname, 'views/partials')]);
  
  app.use(express.static(__dirname)); // serve static files from cwd

function getIpFromReq (req) { // get the client's IP address
    var bareIP = ":" + ((req.connection.socket && req.connection.socket.remoteAddress)
        || req.headers["x-forwarded-for"] || req.connection.remoteAddress || "");
    return (bareIP.match(/:([^:]+)$/) || [])[1] || "127.0.0.1";
}

// proxying requests from /analytics to www.google-analytics.com.
app.use("/analytics", proxy("www.google-analytics.com", {
    proxyReqPathResolver: function (req) {
        return req.url + (req.url.indexOf("?") === -1 ? "?" : "&")
            + "uip=" + encodeURIComponent(getIpFromReq(req));
    }
}));
  
  
  




  
 const options = {
  
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  }
};
router.get('/robots.txt', (req, res) => (
  res.status(200).sendFile('robots.txt', options)
));

 
   app.set("view options", {layout: false});  
  // app.engine('xhtml', require('ejs').renderFile); 
   
  // app.set('view engine', 'xhtml');
  
// Set the view engine to ejs
app.set('view engine', 'ejs');


  
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


var seo = require('express-seo')(app);
 
// For internatanalization, set the supported languages
seo.setConfig({
    langs: ["en", "fr","sr-rs"]
});
 
// Set the default tags
seo.setDefaults({
    html: "<a href='https://www.facebook.com/izprogramiranja/?modal=admin_todo_tour'>Sledi me na fejsbuku</a>", // Special property to insert html in the body (interesting to insert links)
    title: "Iz programiranja", // Page title
    // All the other properties will be inserted as a meta property
    description: {
        en: "Check out my awesome website",
        fr: "Decouvez mon incroyable site"
    },
    image: "https://assets-cdn.github.com/images/modules/dashboard/bootcamp/octocat_setup.png"
});
 
// Create an seo route
seo.add("/contact", function(req, opts, next) {
    /*
    req: Express request
    opts: Object {
        service: String ("facebook" || "twitter" || "search-engine")
        lang: String (Detected language)
    }
    */
    next({
        description: "Amazing contact page"
    });
});

