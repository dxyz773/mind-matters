const express = require("express");
const cors = require("cors");
const Passage = require("@passageidentity/passage-node");
const { NotFoundError } = require("./expressErrors");
const app = express();
require("dotenv").config();


app.use(cors({
  origin: ['http://127.0.0.1:5173', 'http://localhost:3001'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));





/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: {message, status}
  });
});


const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});

app.post("/auth", async (req, res) => {
  console.log("hit this");
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone, } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      res.json({
        authStatus: "success",
        identifier,
      });
    }
  } catch (e) {
    // authentication failed
    console.log(e);
    res.json({
      authStatus: "failure",
    });
  }
});

app.listen(3001, function() {
  console.log("Server started on PORT 3001");
})

