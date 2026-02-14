import { Router } from "express";
import { getCategories , addCategories , deleteCategories} from "../controllers/categoriesController.js";


const router = Router();

router.get("/" , getCategories);
router.post("/" , addCategories);
router.delete("/:name" , deleteCategories);

export default router;
