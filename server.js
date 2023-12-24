require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 9999;

// ! routers list
const userRouter = require("./routes/userRoute.js");
const heroRouter = require("./routes/heroRoute.js");
const serviceRouter = require("./routes/serviceRoute.js");
const testimonialRouter = require("./routes/testimonialRoute.js");
const teamRouter = require("./routes/teamRoute.js");
const blogRouter = require("./routes/blogRoute.js");
const researcherRouter = require("./routes/researcherRoute.js");

// ! use express...
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ! root server
app.get("/", (req, res) => {
  res.send({
    message: "water-air lab server",
    startDate: "12/09/2023",
    runningDate: new Date().toLocaleDateString(),
  });
});

// ! use routers list
app.use("/api/user", userRouter);
app.use("/api/hero", heroRouter);
app.use("/api/service", serviceRouter);
app.use("/api/testimonial", testimonialRouter);
app.use("/api/team", teamRouter);
app.use("/api/blog", blogRouter);
app.use("/api/researcher", researcherRouter);

// !mongodb connection
mongoose
  .connect(process.env.MONGODB_URL_CONNECTION)
  .then(() => {
    console.log("database connected");
    // ! port listening
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log({ error: error.message });
  });
