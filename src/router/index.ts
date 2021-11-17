import { Router } from "express";

import testRouters from "./testRouters";

const router = Router();

router.use(testRouters);

export default router;