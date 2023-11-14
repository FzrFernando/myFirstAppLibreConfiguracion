const Modelo = require('../models/modelo');
const { validationResult } = require('express-validator');

const getModelos = async (req, res) => {
  try {
    const modelos = await Modelo.find();
    res.status(200).json(modelos);
  } catch (error) {
    res.status(500).json({message: error});
  }
}

const addModelos = async(req, res = response) => {
  //Obtenemos los errores de la validación
  const errors = validationResult(req);
  // Si no está vacío respondemos con código de error y los errores
  if( !errors.isEmpty() ){
    return res.status(400).json(errors);
  }
  const {nombre,caballos,anno_modelo} = req.body;
  const modelo = new Modelo({nombre,caballos,anno_modelo})
  const newModelo = await Modelo.findOne({nombre})
  if(newModelo){
    return res.status(400).json({msg:"Ya existe un modelo con el mismo nombre"})
  }
  await modelo.save();
  res.json({modelo})
}

module.exports = { getModelos, addModelos}