const express = require("express");
const { users, companies } = require("./data");

const app = express();
app.use(express.json());

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

// Get all accounts
app.get("/accounts", (req, res) => {
  res.json(companies);
});

// Update account status
app.post("/accounts/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const company = companies.find(c => c.id == id);
  if (!company) {
    return res.status(404).json({ message: "Company not found" });
  }

  company.accountStatus = status;
  res.json({ message: "Status updated", company });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running");
});
