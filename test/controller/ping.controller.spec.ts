import { Request, Response } from 'express';
import * as controller from '../../src/controller';

const req = {} as Request;
const res = {} as Response;
res.status = jest.fn().mockReturnThis();
res.setHeader = jest.fn().mockReturnThis();
res.send = jest.fn();

describe('Ping Controller', () => {
	it('Should controller be called once', () => {
		const spy = jest.spyOn(controller, 'ping');
		controller.ping(req, res);
		expect(spy).toHaveBeenCalled();
	});
});
