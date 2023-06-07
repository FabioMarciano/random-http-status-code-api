import { ping } from '../../src/model';
import { HttpStatusCode, HttpStatusMessage } from '../../src/type';
import HealthCheck from '../../src/type/health.check';

describe('Ping Model', () => {
	it('Should get an HttpStatusCode.OK response', () => {
		const expected: HealthCheck = {
			uptime: process.uptime(),
			status: { code: HttpStatusCode.OK, message: HttpStatusMessage[HttpStatusCode.OK] },
			timestamp: Date.now(),
		};
		expect(ping().status.code).toBe(expected.status.code);
	});
});
