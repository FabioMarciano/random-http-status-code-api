/**
 * HealthCheck type file.
 */

'use strict';

import HttpStatusCode from './http.status.code';

type HealthCheck = {
	uptime: number;
	status: {
		code: HttpStatusCode;
		message: string;
	};
	timestamp: number;
};

export default HealthCheck;
