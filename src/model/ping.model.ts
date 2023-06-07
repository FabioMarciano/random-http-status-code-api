/**
 * Ping Model file.
 */

import { HttpStatusMessage } from '../type';
import HealthCheck from '../type/health.check';
import HttpStatus from '../type/http.status';

export default (): HealthCheck => {
	const healthCheck: HealthCheck = {
		uptime: process.uptime(),
		status: {
			code: HttpStatus.OK,
			message: HttpStatusMessage[HttpStatus.OK],
		},
		timestamp: Date.now(),
	};
	return healthCheck;
};
