require("dotenv").config(); // Load environment variables from .env file
const { Pool } = require("pg"); // Import pg (PostgreSQL client)

// Create a new connection pool
const pool = new Pool({
  user: process.env.DB_USER,      // Get from .env
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

// Test the database connection
pool.connect()
  .then(() => console.log("🔥 Connected to PostgreSQL!"))
  .catch(err => console.error("❌ Database connection error:", err));

module.exports = pool; // Export the pool to use it in other files
