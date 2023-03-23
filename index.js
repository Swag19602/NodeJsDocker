const express = require("express");
const mongoose = require("mongoose");
const session=require("express-session");
const redis=require("redis");
// const RedisStore = require("connect-redis")(session);
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_IP,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
} = require("./config/config");
let redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT,
})
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
  });

  // app.use(session({
  //   store: new RedisStore({client: redisClient}),
  //   secret: SESSION_SECRET,
  //   cookie:{
  //     secure: false,
  //     resave: false,
  //     saveUninitialized: false,
  //     httpOnly: true,
  //     maxAge:30000
  //   }
  // }))


app.use(express.json());
app.get("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>Hi there</h1>");
});
app.use("/post", postRoutes);
app.use("/auth", userRoutes);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
