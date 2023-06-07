/**
 * List View file.
 */

'use strict';

import { Request, Response } from 'express';
import HttpStatusCode from '../type/http.status.code';

export default (_request: Request, response: Response, listData = {}): void => {
	response
		.status(Number(HttpStatusCode.OK))
		.setHeader('content-type', 'application/json')
		.send(JSON.parse(JSON.stringify(listData)));
};
