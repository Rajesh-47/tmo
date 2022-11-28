let express =require("express");
let bodyParser=require("body-parser");
const serverConfig = require("./config/server.config");
let router=require("./routes/index");
let expressApp= express();
expressApp.use(bodyParser.json());
expressApp.use(router); // this must be below the middleware otherwise throws error 





expressApp.listen(serverConfig.PORT,() =>{
    console.log("server running on port : " + serverConfig.PORT);
});