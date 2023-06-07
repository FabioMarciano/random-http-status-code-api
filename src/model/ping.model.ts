/**
 * Ping Model file.
 */

'use strict';

import { HttpStatusMessage } from '../type';
import HealthCheck from '../type/health.check';
import HttpStatusCode from '../type/http.status.code';

export default (): HealthCheck => {
	const healthCheck: HealthCheck = {
		uptime: process.uptime(),
		status: {
			code: HttpStatusCode.OK,
			message: HttpStatusMessage[HttpStatusCode.OK],
		},
		timestamp: Date.now(),
	};
	return healthCheck;
};
