require('dotenv').config();
const { Server } = require("socket.io");
const { createClient } = require("redis");

const redisClient = createClient({
  url: process.env.UPSTASH_REDIS_URL
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

const io = new Server(3001, {
  cors: {
    origin: "*",
  },
});

(async () => {
  await redisClient.connect();
})();

io.on("connection", async (socket) => {
  console.log("a user connected");

  // Send message history to the new client
  const messages = await redisClient.lRange("messages", 0, -1);
  const messageObjects = messages.map(msg => JSON.parse(msg));
  socket.emit("history", messageObjects.reverse());

  socket.on("message", async (msg) => {
    const messageString = JSON.stringify(msg);
    await redisClient.lPush("messages", messageString);
    await redisClient.lTrim("messages", 0, 49);
    io.emit("message", msg);
  });

  socket.on("clear_chat", async () => {
    await redisClient.del("messages");
    io.emit("chat_cleared");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

process.on('SIGINT', async () => {
  await redisClient.disconnect();
  process.exit(0);
});
