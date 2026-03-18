import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import path from "path";
import { authController } from "./server/controllers/AuthController";
import { userController } from "./server/controllers/UserController";
import { authenticateToken, authorizeRole } from "./server/security/SecurityConfig";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // --- API Routes ---
  app.get("/api/public", userController.getPublicContent);
  app.post("/api/auth/register", authController.register);
  app.post("/api/auth/login", authController.login);
  app.get("/api/user", authenticateToken, authorizeRole(["USER", "ADMIN"]), userController.getUserContent);
  app.get("/api/admin", authenticateToken, authorizeRole(["ADMIN"]), userController.getAdminContent);

  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api/docs`);
  });
}

startServer();
