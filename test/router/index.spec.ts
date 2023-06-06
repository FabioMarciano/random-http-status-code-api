import express from 'express';
import request from 'supertest';
import routers from '../../src/router';
import HttpStatus from '../../src/type/http.status';

const http = express();
http.use(routers);

describe('Routers', () => {
	describe('Ping Router', () => {
		it('Should test [GET /ping] endpoint', async () => {
			const response = await request(http).get('/ping');
			expect(response.statusCode).toBe(HttpStatus.OK);
		});
	});

	describe('Root Router', () => {
		it('Should test [GET /] endpoint', async () => {
			const response = await request(http).get('/');
			expect(response.statusCode).toBeGreaterThan(99);
		});
	});

	describe('Status Code Router', () => {
		it('Should test [GET /200] endpoint', async () => {
			const response = await request(http).get('/200');
			expect(response.statusCode).toBe(HttpStatus.OK);
		});
	});
});
