// const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 3000;

const createConnection = async () => {
  try {
    await require("./app").connection();
    require("./app").app.listen(port, () => {
      console.log("🚀 Server started at port", Number(port));
    });
  } catch (error) {
    console.log(error);
  }
};

createConnection();
