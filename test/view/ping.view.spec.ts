import { Request, Response } from 'express';
import { ping } from '../../src/view';
import { HttpStatusCode, HttpStatusMessage, HealthCheck } from '../../src/type';

const req = {} as Request;
const res = {} as Response;
res.status = jest.fn().mockReturnThis();
res.setHeader = jest.fn().mockReturnThis();
res.send = jest.fn();

describe('Ping View', () => {
	it('Should view be called once with HttpStatusCode.OK', () => {
		const healthCheck: HealthCheck = {
			uptime: process.uptime(),
			status: { code: HttpStatusCode.OK, message: HttpStatusMessage[HttpStatusCode.OK] },
			timestamp: Date.now(),
		};
		ping(req, res, healthCheck);
		expect(res.status(healthCheck.status.code).send).toBeCalled();
	});
});
