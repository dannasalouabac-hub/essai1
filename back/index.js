const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("hello from backend");
});

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connecté à MongoDB Atlas");

    const port = process.env.PORT || 2000;
    app.listen(port, () => {
      console.log("🚀 Serveur démarré sur le port " + port);
    });
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB :", error.message);
    process.exit(1);
  }
}

connectDB();
