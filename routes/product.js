const express = require("express");
const router = express.Router();

// prettier-ignore
const {create,productById,read,remove,update,list,} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);

router.get("/product/:productId", read);

router.get("/products", list);

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

// prettier-ignore
router.delete("/product/:productId/:userId",requireSignin,isAuth,isAdmin,remove);

// prettier-ignore
router.put("/product/:productId/:userId",  requireSignin,isAuth,isAdmin,update);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
