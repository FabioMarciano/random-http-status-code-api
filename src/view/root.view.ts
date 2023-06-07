/**
 * Root View file.
 */

'use strict';

import { Request, Response } from 'express';
import HttpStatusCode from '../type/http.status.code';
import HttpStatusMessage from '../type/http.status.message';

export default (_request: Request, response: Response, httpStatusCode: HttpStatusCode = HttpStatusCode.OK): void => {
	response.status(Number(httpStatusCode)).send(HttpStatusMessage[httpStatusCode]);
};
