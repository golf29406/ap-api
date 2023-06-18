import express, { NextFunction } from "express";
const paymentController = require('../controllers/paymentController');

const router = express.Router();

//GET DATA PAYMENTS
router.get('/', paymentController.findAll);

//INSERT DATA PAYMENTS
router.post('/', paymentController.index);

module.exports = router;
