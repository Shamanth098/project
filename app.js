//Core Model
// const path = require('path');

// External Model
const express = require("express");
const dashbord = require("./routes/dashbord");
const mongoConnect = require("./utils/databaseUtil");

//Local Model

const app = express();

app.use(dashbord);

//Server Running

const PORT = 3006;
mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
  });
});
