import express from 'express';
import Routes from "./Routes"

const app = express()

app.use(express.json())

Routes(app);

export = app