const express= require("express")
const { route } = require("express/lib/application")
const router=express.Router()

router.get("/test",function(req,res){
    res.send("working")
})


module.exports=router