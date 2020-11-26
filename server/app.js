const express = require("express");

const { Client } = require("pg");

const app = express();

var cors = require('cors')
app.use(cors())
app.get("/product", async (req, res, next) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123123",
  });

  client
    .connect()
    .then(() => console.log("connected"))
    .catch((err) => console.error("connection error", err.stack));

  client.query("SELECT * FROM public.product", (err, res2) => {
    if (err) {
      console.log(err.stack);
      res.status(200).json({
        success: false,
        message: err.stack,
      });
    } else {
      res.status(200).json({
        success: true,
        data: res2.rows,
      });
    }
    client.end();
  });
});

app.get("/branch", async (req, res, next) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123123",
  });

  client
    .connect()
    .then(() => console.log("connected"))
    .catch((err) => console.error("connection error", err.stack));

  client.query("SELECT * FROM public.branch", (err, res2) => {
    if (err) {
      console.log(err.stack);
      res.status(200).json({
        success: false,
        message: err.stack,
      });
    } else {
      res.status(200).json({
        success: true,
        data: res2.rows,
      });
    }
    client.end();
  });
});

app.get("/stock", async (req, res, next) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123123",
  });

  client
    .connect()
    .then(() => console.log("connected"))
    .catch((err) => console.error("connection error", err.stack));

  client.query("SELECT * FROM public.stock", (err, res2) => {
    if (err) {
      console.log(err.stack);
      res.status(200).json({
        success: false,
        message: err.stack,
      });
    } else {
      res.status(200).json({
        success: true,
        data: res2.rows,
      });
    }
    client.end();
  });
});

module.exports = app;
