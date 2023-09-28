const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const dbPath = path.join(__dirname, "users.db");

let db = null;

const intilizeDataBase = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
  } catch (err) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
intilizeDataBase();
app.use(express.json());

app.post("/users/save-user", async (req, res) => {
  const userProfile = req.body;
  const { id, username, email, age, location } = userProfile;

  const saveQuery = `INSERT INTO users (id, username, email, age, location) VALUES ('${id}', '${username}', '${email}', ${age}, '${location}')`;
  const data = await db.run(saveQuery);

  res.status(200).json({ userId: id });
});

app.listen(3002, () => {
  console.log("Server Running at http://localhost:3002/");
});
