const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/users/save-user", async (req, res) => {
  try {
    const userData = req.body;

    if (!validateUserProfile(userData)) {
      return res.status(400).json({ error: "Please Check Details" });
    }
    const response = await axios.post(
      "http://localhost:3002/users/save-user",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json({ userId: response.data.userId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function validateUserProfile(userProfile) {
  // Validate email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const isValidEmail = emailRegex.test(userProfile.email);

  // Check if age is between 18 and 45
  const isValidAge = userProfile.age >= 18 && userProfile.age <= 45;

  return isValidEmail && isValidAge;
}

app.listen(3001, () => {
  console.log("Server is running port 3001");
});
