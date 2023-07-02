import express from "express";

import DbConnection from "./connection/dbConnetion.js";
import route from "./router/routes.js";

const app = express();
app.use(express.json());

app.use("/api", route);

app.use("/upload", express.static("upload"));

// error massage middleware function
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const massage = err.massage || "Something wrong";
  return res.status(status).json({ sucess: false, status, massage });
});

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(3000, () => {
  DbConnection();
  console.log(`Server is running ${process.env.port}`);
});
