import express from 'express';
import request from 'supertest';
import routers from '../../src/router/static.public.router';
import { HttpStatusCode } from '../../src/type';

const http = express();
http.use(routers);

describe('Routers', () => {
	describe('Static Public Router', () => {
		it('Should test [GET /robots.txt] static file', async () => {
			const response = await request(http).get('/robots.txt');
			expect(response.statusCode).toBe(HttpStatusCode.OK);
		});
	});
});
