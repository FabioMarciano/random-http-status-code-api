/**
 * Root Controller file.
 */

'use strict';

import { Request, Response } from 'express';
import model from '../model/root.model';
import view from '../view/root.view';
import HttpStatusCode from '../type/http.status.code';

export default (request: Request, response: Response): void => {
	const httpStatusCode: HttpStatusCode = model();
	view(request, response, httpStatusCode);
};
