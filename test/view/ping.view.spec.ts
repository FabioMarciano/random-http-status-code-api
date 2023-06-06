import { Request, Response } from 'express';
import { ping } from '../../src/view';
import { HttpStatus } from '../../src/type';

const req = {} as Request;
const res = {} as Response;
res.sendStatus = jest.fn();

describe('Ping View', () => {
	it('Should view be called once with HttpStatus.OK', () => {
		const httpStatusCode: HttpStatus = HttpStatus.OK;
		ping(req, res, httpStatusCode);
		expect(res.sendStatus).toBeCalledWith(httpStatusCode);
	});

	it('Should view be called once with no HttpStatus param', () => {
		ping(req, res);
		expect(res.sendStatus).toBeCalled();
	});
});
