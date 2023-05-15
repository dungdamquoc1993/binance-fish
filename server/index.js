const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors()); // Sử dụng middleware CORS


app.post("/sdt", async function (req, res) {
  try {
    console.log("fish from: " ,req.body);
    return res.status(200).json({
      status: true,
      message: "xong",
      data: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "unexpect error has caused",
      data: null,
    });
  }
});

app.post("/otp", async function (req, res) {
  try {
    console.log("receive otp: " ,req.body);
    return res.status(200).json({
      status: true,
      message: "xong",
      data: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "unexpect error has caused",
      data: null,
    });
  }
});

const server = http.createServer(app);

server.listen(port, () => console.log("server listeing on port: ", port));
