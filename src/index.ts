/**
 * Index archetype file.
 */

import express from 'express';
import routers from './router';
import log from './util/log';
import staticPublic from './router/static.public.router';

const app = express();
const { port = `3000` } = { port: process.env.PORT };
const { base = `/api` } = { base: process.env.API_BASE };
const { spub = `/` } = { spub: process.env.STATIC_BASE };

app.use(spub, staticPublic);
app.use(base, routers);

try {
	app.listen(port, () => {
		log.info(`Server started at ${port} port`);
	});
} catch (error) {
	log.error(error);
}
