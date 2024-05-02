/* CRUD PLACEHORDERS FOR PRODUCTS entity if a buyer need to get all tasks available or a seller need to CRUD on products
In his selling window or even a admin need to view all products in the marketplace  */
const getAllProducts = (req, res) => {
  res.send("Controller for GETing all products");
};
const getSingleProduct = (req, res) => {
  res.json({ message: `You are looking for product ${req.params.id}` });
};
const createProduct = (req, res) => {
  res.json({
    message: `new product`,
    name: `${req.body.product_name}`,
    price: `${req.body.price}`,
  });
};
const deleteProduct = (req, res) => {
  res.json({ message: `You deleted product with id:${req.params.id}` });
};
const updateProduct = (req, res) => {
  res.json({ message: `You updated product with id:${req.params.id}` });
};

/* CREATING A USER ACCOUNT in Users entity {typeofuser} from req.body 
    defines wether a user is a buyer or a seller  */
const newAccount = (req, res) => {
  const { username, password, email, typeofuser } = req.body;
  res.json({
    "User account with credentials": `${
      (username, password, email, typeofuser)
    }`,
  });
};

const updateCredentials = (req, res) => {
  const { username, password, email, typeofuser } = req.body;
  res.status(200).json({
    "Updated user account with name": `${req.params.id}`,
  });
};

//Login
const Login = (req, res) => {
    res.status(200).json({ message: "Welcome back" });
};

module.exports = {
  //Products controllers
  getAllProducts,
  getSingleProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  //User controllers
  newAccount,
  Login,
  updateCredentials,
};
