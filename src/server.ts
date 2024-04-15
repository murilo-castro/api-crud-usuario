import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor online na prota ${PORT}.`));
