import { Request, Response } from 'express';
import * as controller from '../../src/controller';
import { HttpStatusCode } from '../../src/type';

const req = {} as Request;
const res = {} as Response;
res.status = jest.fn().mockReturnThis();
res.send = jest.fn();
req.params = { httpStatusCode: `${HttpStatusCode.OK}` };

describe('Status Code Controller', () => {
	it('Should controller be called once', () => {
		const spy = jest.spyOn(controller, 'statusCode');
		controller.statusCode(req, res);
		expect(spy).toHaveBeenCalled();
	});
});
