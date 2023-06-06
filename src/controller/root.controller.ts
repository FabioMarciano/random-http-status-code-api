/**
 * Root Controller file.
 */

import { Request, Response } from 'express';
import model from '../model/root.model';
import view from '../view/root.view';
import HttpStatus from '../type/http.status';

export default (request: Request, response: Response): void => {
	const httpStatusCode: HttpStatus = model();
	view(request, response, httpStatusCode);
};
