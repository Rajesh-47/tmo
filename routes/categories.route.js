let express=require("express");
let categoryRouter=express.Router();
let categoryContoller=require("./../controller/category.controller");



// get call
categoryRouter.get("/", categoryContoller.getAllCategories);
categoryRouter.get("/:categoryId", categoryContoller.getCategoryById);

// post call

categoryRouter.post("/", categoryContoller.addNewCategory);


// delete call

categoryRouter.delete("/:categoryId",categoryContoller.deleteCategoryById)


module.exports=categoryRouter;

