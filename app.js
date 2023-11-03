const express = require('express') //importamos express
// creamos un objeto con la funcion express que contiene métodos
// para hacer peticiones e iniciar el servidor
const app = express();
require('dotenv').config();
// const port = 3000
const userRoutes = require("./routes/users");

// Database conection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main() {
  await mongoose.connect(process.env.MONGO_CNN);
  console.log('Database connected ')
}
main().catch((err) => console.log(err));

app.use(express.json());
app.use('/users',userRoutes);

// Iniciamos el servidor
app.listen(3000, function() {
  console.log(
    `El servidor se ha iniciado en el puerto ${process.env.PORT}`
  );
})