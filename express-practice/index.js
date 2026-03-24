import express from "express";
const app = express();
app.get("/add", (req, res) => {
  const firstArgument = parseInt(req.query.a);
  const secondArgument = parseInt(req.query.b);
  const answer = firstArgument + secondArgument;
  res.send(answer);
});

app.get("/subtract", (req, res) => {
  const firstArgument = parseInt(req.query.a);
  const secondArgument = parseInt(req.query.b);
  const answer = firstArgument - secondArgument;
  res.send(answer);
});

app.get("/multiply", (req, res) => {
  const firstArgument = parseInt(req.query.a);
  const secondArgument = parseInt(req.query.b);
  const answer = firstArgument * secondArgument;
  res.send(answer);
});

app.get("/divide", (req, res) => {
  const firstArgument = parseInt(req.query.a);
  const secondArgument = parseInt(req.query.b);
  const answer = firstArgument / secondArgument;
  res.send(answer);
});
app.listen(3000);
