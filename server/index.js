
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const postRoute = require("./routes/post.js")

dotenv.config();
const app = express();
const PORT = process.env.port || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

//ROUTES
app.use("/post", postRoute)

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
