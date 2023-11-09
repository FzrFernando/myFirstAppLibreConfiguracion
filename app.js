const express = require('express') //importamos express
// creamos un objeto con la funcion express que contiene métodos
// para hacer peticiones e iniciar el servidor
const app = express();
const Athlete = require('./models/athlete');


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

// Middleware
app.use(express.json());
app.use('/users',userRoutes);

app.get('/athlete', async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.status(200).json(athletes);
  } catch (error) {
    res.status(500).json({message: error});
  }
})

app.post("/athlete", async (req, res) => {
  const athlete = req.body;
  //Validaciones
  const newAthlete = new Athlete(athlete);
  try {
    await newAthlete.save();
    res.status(201).json(newAthlete);
  } catch (error) {
    res.status(500).json({message: error});
  }
});

// Iniciamos el servidor
app.listen(3000, function() {
  console.log(
    `El servidor se ha iniciado en el puerto ${process.env.PORT}`
  );
})