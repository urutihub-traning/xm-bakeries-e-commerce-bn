import { Router } from "express";
import { TestController } from "../controllers";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "hello" });
});

routes.get("/test", TestController);

export default routes;
