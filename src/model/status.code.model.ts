/**
 * Status Code Model file.
 */

import { Request } from 'express';
import HttpStatus from '../type/http.status';

export default (request: Request): HttpStatus => {
	const httpStatusCode: HttpStatus = Number(request.params.httpStatusCode);
	return httpStatusCode;
};
