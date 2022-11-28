const sequelize=require("sequelize");
const sequelizeInstance=new sequelize(
    "tmo",
    "root",
    "root",
    {
        host:"localhost",
        dialect: "mysql",
        operatorAliases:0,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:1000
        }
    }
);
module.exports=sequelizeInstance;