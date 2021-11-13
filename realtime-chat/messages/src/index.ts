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

io.on("connection", (socket) => {
  socket.on("test", () => {
    socket.emit("data", { data: [123] });
  });
});

httpServer.listen(process.env.PORT || 3000);
