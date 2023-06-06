import { Request, Response } from 'express';
import { root } from '../../src/view';
import { HttpStatus } from '../../src/type';

const req = {} as Request;
const res = {} as Response;
res.sendStatus = jest.fn().mockReturnThis();

describe('Root View', () => {
	it('Should view be called once with statusCode string', () => {
		const httpStatusCode: HttpStatus = HttpStatus.OK;
		root(req, res, httpStatusCode);
		expect(res.sendStatus).toBeCalledWith(httpStatusCode);
	});

	it('Should view be called once with no statusCode string', () => {
		root(req, res);
		expect(res.sendStatus).toBeCalled();
	});
});
