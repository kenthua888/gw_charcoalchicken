require("dotenv").config();
const express = require("express");
const cors = require('cors');
const pool = require("./db"); // Import database connection
const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from React development server
}));
app.use(express.json()); // Middleware to handle JSON requests



// Route: Get all categories
app.get("/api/categories", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM categories");
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

// 🔥 Route: Get Menu Items by Category
app.get("/api/menu-items/category/:category_id", async (req, res) => {
    try {
      const { category_id } = req.params;
      const result = await pool.query(
        "SELECT * FROM menu_items WHERE category_id = $1",
        [category_id]
      );
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

// Get all menu items
app.get("/api/menu-items", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM menu_items");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// gets price of items
app.get("/api/menu-items/prices/name/:menu_item_id", async (req, res) => {
  try {
    const { menu_item_id } = req.params;
    console.log('Fetching prices for: ', menu_item_id);

    const result = await pool.query(
      `SELECT 
        menu_items.name AS item_name,
        menu_items.has_sizes,
        sizes.name AS size_name, 
        menu_item_sizes.price AS size_price, 
        menu_items.price AS fixed_price
      FROM menu_items
      LEFT JOIN menu_item_sizes ON menu_items.id = menu_item_sizes.menu_item_id
      LEFT JOIN sizes ON menu_item_sizes.size_id = sizes.id
      WHERE menu_items.id = $1`, // Use menu_items.id instead of name
      [menu_item_id] // Pass the ID instead of the name
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No pricing information found for this menu item" });
    }

    // Check if the item has sizes
    if (result.rows[0].has_sizes) {
      // If the item has sizes, return size-price pairs
      const formattedResponse = result.rows.map(row => ({
        size: row.size_name,
        price: row.size_price,
        name: row.item_name
      }));
      res.json(formattedResponse);
    } else {
      // If the item has NO sizes, return fixed price
      res.json([{ size: "Fixed Size", price: result.rows[0].fixed_price, name: result.rows[0].item_name }]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
