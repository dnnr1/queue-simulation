import express from "express";
import router from "./routes";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/health", (_, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log("Service running on port: " + PORT);
});
