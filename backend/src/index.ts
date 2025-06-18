import express, { Express, Request, Response } from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import http from "http";

const port = 8080;

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const server = http.createServer(app)

server.listen(8080, () => {
  console.log(`Listening on port ${port}`);
});