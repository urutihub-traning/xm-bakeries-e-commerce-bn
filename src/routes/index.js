import { Router } from "express";
import { TestController, exampleController } from "../controllers";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello" });
});

routes.get("/example", exampleController);

routes.get("/test", TestController);

export default routes;
