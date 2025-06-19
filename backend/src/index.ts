import express, { Express, Request, Response } from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import http from "http";
import { pool } from "./database";

const port = 8080;

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/api/v1/resources', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM  SharedResources');
    res.json(rows);
  } catch (err) {
    console.error('Error SQL :', err);
    res.status(500).json({ error: 'Error server', details: err.message || err });
  }
})

const server = http.createServer(app)

server.listen(8080, () => {
  console.log(`Listening on port ${port}`);
});