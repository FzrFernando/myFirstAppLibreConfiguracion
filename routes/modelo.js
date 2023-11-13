const express = require("express");
const router = express.Router();
const { getModelos, addModelos} = require ('../controllers/modelo')
const { check } = require('express-validator');
const { validateFields } = require("../middlewares/validate-fields");

router.get('/',getModelos)
router.post('/',[
  check('nombre','Name is required').not().isEmpty(),
  check('caballos','Cv is required').not().isEmpty(),
  validateFields
],addModelos);

module.exports = router;