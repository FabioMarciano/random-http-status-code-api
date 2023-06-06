import { Request, Response } from 'express';
import * as controller from '../../src/controller';
import HttpStatus from '../../src/type/http.status';

const req = {} as Request;
const res = {} as Response;
res.sendStatus = jest.fn();
req.params = { httpStatusCode: `${HttpStatus.OK}` };

describe('Status Code Controller', () => {
	it('Should controller be called once', () => {
		const spy = jest.spyOn(controller, 'statusCode');
		controller.statusCode(req, res);
		expect(spy).toHaveBeenCalled();
	});
});
