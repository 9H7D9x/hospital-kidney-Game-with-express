const express= require("express");
const app=express();


// function sum (n){
//     let ans= 0;
//     for(let i=1 ; i<=n;i++){
//         ans=ans+1;
//     }
//     return ans;
// }
const users=[
    {
        name:"john",
        kidneys:[{
            healthy:false
        }]
    }
]

app.use(express.json());

app.get("/" , function(req, res){
    const johnKidneys =users[0].kidneys;
    const noofKidneys =johnKidneys.length;
    let noofHealthyKidney=0;
    for(let i =0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            noofHealthyKidney=noofHealthyKidney+1;
        }
    }
    const noofUnhealthyKidneys=noofKidneys-noofHealthyKidney;
    res.json({
        noofHealthyKidney,
        noofKidneys,
        noofUnhealthyKidneys
    })
})

app.post("/", function(req, res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:'done'
    })
})

app.put("/", function(req,res){
    for(let i =0;i<users[0].kidneys.length;i++){ 
        users[0].kidneys[i].healthy=true;
   }
   
   res.json({msg:"done"})

})


app.delete("/", function(req,res){
    const newkidneys=[];
    for(let i =0;i<users[0].kidneys.length;i++){
         if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
         }
    }
    users[0].kidneys=newkidneys;
    res.json({msg:"done"})
})

app.listen(3000);