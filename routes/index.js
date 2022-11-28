let express=require("express");
let router=express.Router();
let categoryRouter=require("./categories.route");

router.get("/",(req,res,next) =>{
    res.write("this is Base page ");
    res.end();
});

router.use('/categories',categoryRouter);

module.exports=router;
