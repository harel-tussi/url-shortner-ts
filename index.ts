import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { router as urlRouter } from "./routes/url";
import mongoose from "mongoose";
var bodyParser = require("body-parser");

// rest of the code remains same
const app = express();
const PORT = 8000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/url.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.urlencoded({ extended: false }));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json());
app.use(urlRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/urls", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch(() => {
    console.log("MongoDb Failed");
  });

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
