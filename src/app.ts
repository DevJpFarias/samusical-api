import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import { studentRouter } from "./modules/students/routes";

const app = express();

app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

app.use('/students', studentRouter)

app.get('/', (_request, response) => {
  response.status(200).send('Servidor no ar!')
})

export default app;
