const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  newAccount,
  updateCredentials,
  Login,
} = require("../controllers/controllers");
//Setting routes for API
router.route("/").get(getAllProducts).post(createProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .patch(updateProduct);
router.route("/user").post(newAccount);
router.route("/user/:name").get(Login).patch(updateCredentials);
module.exports = router;
