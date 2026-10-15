const express=require("express");
const app=express();
const dotenv=require("dotenv")
dotenv.config()

app.get("/",(req,res) =>
{
    res.send("hello from backend")
}
);
const prt1=process.env.PORT 
const port=2000;
app.listen(prt1,() =>
{
    console.log("le port est" + prt1)
});
