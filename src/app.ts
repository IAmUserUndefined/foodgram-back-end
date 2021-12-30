import express from "express";
import cors from "./middlewares/cors";
import router from "./router/index";
import path from "path";

const app = express();

app.use(cors);
app.use(express.static(path.resolve(__dirname, "utils","tmp")));
app.use(express.json());
app.use(router);

export default app;