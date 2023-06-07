/**
 * Root View file.
 */

import { Request, Response } from 'express';
import HttpStatus from '../type/http.status';
import HttpStatusMessage from '../type/http.status.message';

export default (_request: Request, response: Response, httpStatusCode: HttpStatus = HttpStatus.OK): void => {
	response.status(Number(httpStatusCode)).send(HttpStatusMessage[httpStatusCode]);
};
