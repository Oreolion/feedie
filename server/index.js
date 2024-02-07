const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return {
    success: true,
    data: [],
    message: "Successfully fetched users",
  };
});

app.listen("8000", () => {
  console.log("listening to the server on port 8000....");
});
