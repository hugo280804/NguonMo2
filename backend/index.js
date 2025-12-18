const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Model
const Product = mongoose.model("Product", new mongoose.Schema({
  name: String,
  price: Number
}));

// API
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("Shop Võ Anh Tuấn ");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on " + PORT));
