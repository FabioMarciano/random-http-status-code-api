import { Request, Response } from 'express';
import { ping } from '../../src/view';
import { HttpStatus, HttpStatusMessage } from '../../src/type';

const req = {} as Request;
const res = {} as Response;
res.status = jest.fn().mockReturnThis();
res.send = jest.fn();

describe('Ping View', () => {
	it('Should view be called once with HttpStatus.OK', () => {
		const httpStatusCode: HttpStatus = HttpStatus.OK;
		ping(req, res, httpStatusCode);
		expect(res.status(httpStatusCode).send).toBeCalledWith(HttpStatusMessage[httpStatusCode]);
	});

	it('Should view be called once with no HttpStatus param', () => {
		const httpStatusCode: HttpStatus = HttpStatus.OK;
		ping(req, res);
		expect(res.status(httpStatusCode).send).toBeCalled();
	});
});
