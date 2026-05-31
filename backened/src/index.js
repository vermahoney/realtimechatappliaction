import express from "express";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { app, server } from "./lib/socket.js"; // 🔥 IMPORTANT
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
   origin: function(origin, callback) {
      callback(null, true); // allow all origins
    },
    credentials: true
  })
); 

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 🔥 START SERVER HERE (ONLY ONCE)
server.listen(PORT, () => {
  console.log("Server + Socket.IO running on port", PORT);
  connectDB();
});

// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { app, server } from "./socket.js"; // 🔥 IMPORTANT

// import {connectDB} from "./lib/db.js"

// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT;


// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin:  true,
//     credentials: true,
//   })
// );




// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);



// app.listen(PORT, ()=>{
//     console.log("server is running on PORT:" + PORT);
//     connectDB();
// });