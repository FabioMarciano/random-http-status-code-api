/**
 * Ping View file.
 */

import { Request, Response } from 'express';
import HttpStatus from '../type/http.status';
import HttpStatusMessage from '../type/http.status.message';

export default (_request: Request, response: Response, httpStatusCode = HttpStatus.OK): void => {
	response.status(httpStatusCode).send(HttpStatusMessage[httpStatusCode]);
};
