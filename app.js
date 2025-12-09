const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
        <h1>Hello World from Cloud!</h1>
        <p>Timestamp: ${new Date().toISOString()}</p>
    `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
