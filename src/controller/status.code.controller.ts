/**
 * Root Controller file.
 */

import { Request, Response } from 'express';
import model from '../model/status.code.model';
import view from '../view/status.code.view';
import HttpStatus from '../type/http.status';

export default (request: Request, response: Response): void => {
	const httpStatusCode: HttpStatus = model(request);
	view(request, response, httpStatusCode);
};
