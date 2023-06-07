import { Request, Response } from 'express';
import { list } from '../../src/view';
import { HttpStatusCode } from '../../src/type';

const req = {} as Request;
const res = {} as Response;
res.status = jest.fn().mockReturnThis();
res.setHeader = jest.fn().mockReturnThis();
res.send = jest.fn();

describe('List View', () => {
	it('Should view be called once with listData', () => {
		const listData = [
			{
				code: '100',
				messahe: 'Continue',
			},
		];
		list(req, res, listData);
		expect(res.status(HttpStatusCode.OK).send).toBeCalled();
	});

	it('Should view be called once with no listData', () => {
		list(req, res);
		expect(res.status(HttpStatusCode.OK).send).toBeCalled();
	});
});
