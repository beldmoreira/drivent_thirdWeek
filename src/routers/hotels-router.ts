import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getHotelsAvailable } from "@/controllers";

const hotelsRouter = Router();
hotelsRouter.all("/*", authenticateToken);
hotelsRouter.get("/", getHotelsAvailable);
hotelsRouter.get("/:hotelId");

export { hotelsRouter };
