/**
 * Root View file.
 */

import { Request, Response } from 'express';
import HttpStatus from '../type/http.status';

export default (_request: Request, response: Response, httpStatusCode: HttpStatus = HttpStatus.OK): void => {
	response.sendStatus(httpStatusCode);
};
