import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getHotelsAvailable, getRooms } from "@/controllers";

const hotelsRouter = Router();
hotelsRouter.all("/*", authenticateToken);
hotelsRouter.get("/", getHotelsAvailable);
hotelsRouter.get("/:hotelId", getRooms);

export { hotelsRouter };
