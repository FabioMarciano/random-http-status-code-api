/**
 * HealthCheck type file.
 */

import HttpStatus from './http.status';

type HealthCheck = {
	uptime: number;
	status: {
		code: HttpStatus;
		message: string;
	};
	timestamp: number;
};

export default HealthCheck;
