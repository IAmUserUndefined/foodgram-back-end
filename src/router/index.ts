import { Router } from "express";

import testRouters from "./testRouters";
import userRouters from "./userRouters";

const router = Router();

router.use(testRouters);
router.use(userRouters);

export default router;