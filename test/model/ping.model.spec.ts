import { ping } from '../../src/model';
import { HttpStatus, HttpStatusMessage } from '../../src/type';
import HealthCheck from '../../src/type/health.check';

describe('Ping Model', () => {
	it('Should get an HttpStatus.OK response', () => {
		const expected: HealthCheck = {
			uptime: process.uptime(),
			status: { code: HttpStatus.OK, message: HttpStatusMessage[HttpStatus.OK] },
			timestamp: Date.now(),
		};
		expect(ping().status.code).toBe(expected.status.code);
	});
});
