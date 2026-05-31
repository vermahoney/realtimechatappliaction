import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { app, server } from "./lib/socket.js";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

// ✅ CORS MUST BE FIRST
app.use(cors({
  origin: function(origin, callback) {
    callback(null, true);
  },
  credentials: true
}));

// then these
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

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