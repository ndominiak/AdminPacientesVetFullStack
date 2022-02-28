import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js"; //al ser un archivo creado por nosotros hay que ponerle la extension .js
import veterinarioRoutes from "./routes/veterinarioRoutes.js";

const app = express();

dotenv.config();

conectarDB();

app.use("/api/veterinarios", veterinarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
