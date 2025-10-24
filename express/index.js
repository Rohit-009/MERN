const express =require("express");
const app = express();

let port = 3000
app.listen(port, ()=>
    console.log(`app is listing on port${port}`)
)

app.get("/:name/:id" , (req ,res)=> {
    let {name , id} = req.params
    console.log(req.params)
    res.send(`Welcome to the page ${name} and your id is :${id}`)
})




app.post("/" , (req ,res)=> {
    res.send("Root path post ")
})
app.get("/apple" , (req ,res)=> {
    res.send("apple path")
})
app.get("/search" , (req ,res)=> {
   console.log(req.query)
    res.send("no results")
})
