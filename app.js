const express = require('express');
const app = express();
const path = require('path')

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,'views/home.html'))
})

app.get("/projects",(req,res)=>{
    res.send("pagina proyectos")
})

app.use(express.static(path.resolve(__dirname,"public")))

let hostVersion = false

if (hostVersion){
    app.listen(80, () => {
        console.log("servidor corriendo con exito en el la ip configurada");
    })
}else{
    app.listen(3000, () => {
        console.log("servidor corriendo con exito en el puerto 3000");
    })
}

