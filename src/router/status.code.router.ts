/**
 * Status Code Router file.
 */

'use strict';

import { Router, Request, Response } from 'express';
import controller from '../controller/status.code.controller';

const router: Router = Router();

router.all('/:httpStatusCode(\\d{3})', (request: Request, response: Response): void => {
	controller(request, response);
});

export default router;
