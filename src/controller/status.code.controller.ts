/**
 * Root Controller file.
 */

'use strict';

import { Request, Response } from 'express';
import model from '../model/status.code.model';
import view from '../view/status.code.view';
import HttpStatusCode from '../type/http.status.code';

export default (request: Request, response: Response): void => {
	const httpStatusCode: HttpStatusCode = model(request);
	view(request, response, httpStatusCode);
};
