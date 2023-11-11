const express = require("express");
const router = express.Router();

const Modelo = require('./models/modelo');

router.get('/', async (req, res) => {
    try {
      const modelos = await Modelo.find();
      res.status(200).json(modelos);
    } catch (error) {
      res.status(500).json({message: error});
    }
})

router.post("/", async (req, res) => {
    const modelo = req.body;
    //Validaciones
    const newModelo = new Modelo(modelo);
    try {
      await newModelo.save();
      res.status(201).json(newModelo);
    } catch (error) {
      res.status(500).json({message: error});
    }
  });

module.exports = router;