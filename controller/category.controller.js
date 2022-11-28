let categories=require("./../model/category");
let sequelizeInstance=require("./../config/db.config");
let bodyParser=require("body-parser");
let express =require("express");
let expressApp=express();



let createTable= async() => {
    await sequelizeInstance.sync({force:true});
   insertCategories();

    console.log("table is created successfully");
}

let insertCategories= async()=>{
    await categories.bulkCreate([{
        name :"APPLE 13 PRO"
        
    },
    {
        name :"APPLE 14 PRO",
        
    },
    {
        name :"APPLE 8 "
        
    },
    {
        name :"SAMSUNG GALAXY S21 "
        
    },
    {
        name :"APPLE SE"
       
    }
    
    
    ])

}

let getAllCategories= async(req,res,next) =>{
    let Categories=await categories.findAll();
    res.writeHead(200,{ 'Content-Type': 'application/json'});
    res.write(JSON.stringify(Categories));
    res.end();
}


let getCategoryById=async(req,res,next)=>{
    let id=req.params.categoryId;
    if(!id)
    {
        res.status(400).send("ID not passed");
    }

    let Categories=await categories.findAll({
        where:{
            categoryId:id
        }
    });
res.writeHead(200, { 'Content-Type' : 'application/json' });
res.write(JSON.stringify(Categories));
res.end();
}

let addNewCategory=async(req,res,next)=>{
    let categoryToAdd=req.body.name;
    
    
    await categories.create({
        name:categoryToAdd
        
    });
    res.status(201).send("data addedd");
    res.end();
}

let deleteCategoryById=async(req,res,next)=>{
    let id=req.params.categoryId;
    await categories.destroy({
        where:{
            categoryId:id
        }
    });
    res.status(200).send("category deleted");

}

createTable();
module.exports={getAllCategories,getCategoryById,addNewCategory,deleteCategoryById}
