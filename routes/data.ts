import express, { NextFunction } from "express";
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/provinces', dataController.getProvinces);
router.get('/districts', dataController.getDistricts);
router.get('/subdistricts', dataController.getSubDistricts);
router.get('/geography', dataController.getGeography);

module.exports = router;
