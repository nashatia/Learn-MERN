import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ imit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ imit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://learning:@cluster0.28zrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.massage));

// mongoose.set("useFindAndModify", false);
