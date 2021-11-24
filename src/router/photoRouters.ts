import { Router } from "express";

import authenticateUser from "../middlewares/authenticateUser";
import multer from "../middlewares/multer";

import adaptMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";
import adaptRouters from "../adapter/adapterRouters/adapterRouters";

import AddPhotoController from "../useCases/Photo/AddPhoto/AddPhotoController";
import RemovePhotosController from "../useCases/Photo/RemovePhoto/RemovePhotoController";

const router = Router();

router.post("/photo", adaptMiddlewares(authenticateUser), multer, adaptRouters(AddPhotoController.handle));
router.delete("/photo/:photoId/:key", adaptMiddlewares(authenticateUser), adaptRouters(RemovePhotosController.handle));

export default router;