/**
 * Static public Router file.
 */

'use strict';

import express, { Router } from 'express';

const router: Router = Router();

router.use(express.static('public'));

export default router;
