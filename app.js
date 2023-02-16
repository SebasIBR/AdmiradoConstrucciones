const express = require('express');
const app = express();
const path = require('path')

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,'views/index.html'))
})

app.use(express.static(path.resolve(__dirname,"public")))

app.listen(3000, () => {
    console.log("servidor corriendo con exito en el puerto 3000");
})