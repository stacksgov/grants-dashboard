const mongoose=require("mongoose")

module.exports=mongoose.connect(process.env.MONGODB_URI,
    {
        useUnifiedTopology:true,family:4
    }).then(()=>{
        console.log("DB connect");
    }).catch((err)=>{
        console.log('error'+err);
    })

