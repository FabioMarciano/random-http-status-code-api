import { Request, Response } from 'express';
import { root } from '../../src/view';
import { HttpStatusCode, HttpStatusMessage } from '../../src/type';

const req = {} as Request;
const res = {} as Response;
res.status = jest.fn().mockReturnThis();
res.send = jest.fn();

describe('Root View', () => {
	it('Should view be called once with statusCode string', () => {
		const httpStatusCode: HttpStatusCode = HttpStatusCode.OK;
		root(req, res, httpStatusCode);
		expect(res.status(httpStatusCode).send).toBeCalledWith(HttpStatusMessage[httpStatusCode]);
	});

	it('Should view be called once with no statusCode string', () => {
		const httpStatusCode: HttpStatusCode = HttpStatusCode.OK;
		root(req, res);
		expect(res.status(httpStatusCode).send).toBeCalled();
	});
});
