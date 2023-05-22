import express from "express";
import { getAdminOrders, getMyOrders, getOrderDetails, placeOrder, processOrders } from "../controllers/order.js";
import {authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/createorder", isAuthenticated,placeOrder);



router.get("/myorders",isAuthenticated, getMyOrders);

router.get("/order/:id", isAuthenticated,getOrderDetails);


//add admin middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin,getAdminOrders);
router.get("/admin/order/:id", isAuthenticated,authorizeAdmin,processOrders);



export default router;