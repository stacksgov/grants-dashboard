const mongoose=require("mongoose")

module.exports=mongoose.connect(process.env.MONGO_URL,
    {
        useUnifiedTopology:true,family:4
    }).then(()=>{
        console.log("DB connect");
    }).catch((err)=>{
        console.log('error'+err);
    })

