import * as cors from "cors";
import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors({ credentials: true, origin: true }));

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("socket");
});

const main = io.of("/");

main.on("connection", (socket) => {
  const by = socket.handshake.query.by;
  socket.on("SendMessage", (message) => {
    main.emit("ReceivedMessage", {
      // TODO: get time from user instead of server
      createdAt: new Date(),
      by,
      message,
    });
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
