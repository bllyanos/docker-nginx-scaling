const express = require("express");

const app = express();

const APP_INDEX = process.env.APP_INDEX ?? 0;

app.use((_req, res) => res.send(`Hello from ${APP_INDEX}`));

app.listen(3000, () => {
  console.log(`Application ${APP_INDEX} running.`);
});
