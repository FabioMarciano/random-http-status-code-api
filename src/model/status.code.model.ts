/**
 * Status Code Model file.
 */

'use strict';

import { Request } from 'express';
import HttpStatusCode from '../type/http.status.code';

export default (request: Request): HttpStatusCode => {
	const httpStatusCode: HttpStatusCode = Number(request.params.httpStatusCode);
	return httpStatusCode;
};
