/**
 * Ping View file.
 */

import { Request, Response } from 'express';
import HealthCheck from '../type/health.check';

export default (_request: Request, response: Response, healthCheck: HealthCheck): void => {
	response.status(Number(healthCheck.status.code)).send(JSON.parse(JSON.stringify(healthCheck)));
};
