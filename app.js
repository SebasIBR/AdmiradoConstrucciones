const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.send("Bienvenido a la Pagina Principal")
})

app.listen(3000, () => {
    console.log("servidor corriendo con exito en el puesto 3000");
})