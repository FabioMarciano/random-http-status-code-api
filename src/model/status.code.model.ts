/**
 * Status Code Model file.
 */

import { Request } from 'express';
import HttpStatus from '../type/http.status';

export default (request: Request): HttpStatus => {
	const httpStatusCode = request.params.httpStatusCode;
	return Number(httpStatusCode);
};
