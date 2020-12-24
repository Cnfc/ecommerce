const express = require("express");
const router = express.Router();

// prettier-ignore
const {create, productById, read, remove, update, list, listReleated, listCategories, listBySearch, photo} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);

router.get("/products", list);
router.get("/products/related/:productId", listReleated);
router.get("/products/categories", listCategories);
router.get("/product/photo/:productId", photo);

router.post("/products/by/search", listBySearch);

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

// prettier-ignore
router.delete("/product/:productId/:userId",requireSignin,isAuth,isAdmin,remove);

// prettier-ignore
router.put("/product/:productId/:userId",  requireSignin,isAuth,isAdmin,update);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
