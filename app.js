const express = require('express') //importamos express
// creamos un objeto con la funcion express que contiene métodos
// para hacer peticiones e iniciar el servidor
const app = express() 
// const port = 3000
const userRoutes = require("./routes/users");

app.use(express.json());
app.use('/users',userRoutes);

// Iniciamos el servidor
app.listen(3000, function() {
  console.log(
    "El servidor se ha iniciado en el puerto 3000. ¡Ve a localhost:3000 en el navegador y mira lo que hay!"
  );
})