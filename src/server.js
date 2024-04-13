import app from "./app";
import env from "dotenv";

env.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("🚀 Server started at port", Number(port));
});
