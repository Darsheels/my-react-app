import { Router } from "express";
import { getCategories , addCategories , deleteCategory } from "../controllers/categoriesController";


const router = Router()

router.get("/" , getCategories);
router.post("/" , addCategories);
router.delete("./:id" , deleteCategory)

export default router;
