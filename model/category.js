let sequelize=require("sequelize");
let dbconnection= require("./../config/db.config");

let categoryModel=dbconnection.define("categories",{
    categoryId:{
        primaryKey:true,
        notNull:true,
        type:sequelize.DataTypes.INTEGER,
        autoIncrement:true
    },
    name:{
        notNull:true,
        type:sequelize.DataTypes.STRING,

    }
    
},{
    timestamps:false    
    
});


module.exports=categoryModel;
