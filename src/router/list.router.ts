/**
 * List Router file.
 */

'use strict';

import { Router, Request, Response } from 'express';
import controller from '../controller/list.controller';

const router: Router = Router();

router.get('/list', (request: Request, response: Response) => {
	controller(request, response);
});

export default router;
