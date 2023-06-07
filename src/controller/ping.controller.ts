/**
 * Ping Controller file.
 */

import { Request, Response } from 'express';
import model from '../model/ping.model';
import view from '../view/ping.view';
import HealthCheck from '../type/health.check';

export default (request: Request, response: Response): void => {
	const healthCheck: HealthCheck = model();
	view(request, response, healthCheck);
};
