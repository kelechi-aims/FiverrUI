import express from 'express';
import { verifyToken } from '../middlewares/jwt.js';
import { getOrders, intent, confirm } from "../controllers/order.controller.js"

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post('/create-payment-intent/:id/:price', verifyToken, intent)
router.put("/", verifyToken, confirm)
export default router;