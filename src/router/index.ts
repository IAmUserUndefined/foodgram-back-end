import { Router } from "express";

import testRouters from "./testRouters";
import userRouters from "./userRouters";
import photoRouters from "./photoRouters";

const router = Router();

router.use(testRouters);
router.use(userRouters);
router.use(photoRouters);

export default router;