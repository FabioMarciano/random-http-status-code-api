/**
 * Ping View file.
 */

'use strict';

import { Request, Response } from 'express';
import HealthCheck from '../type/health.check';

export default (_request: Request, response: Response, healthCheck: HealthCheck): void => {
	response
		.status(Number(healthCheck.status.code))
		.setHeader('content-type', 'application/json')
		.send(JSON.parse(JSON.stringify(healthCheck)));
};
