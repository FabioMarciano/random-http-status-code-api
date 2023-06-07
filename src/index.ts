/**
 * Index archetype file.
 */

import express from 'express';
import routers from './router';
import log from './util/log';
import staticPublic from './router/static.public.router';

const app = express();
const { port = `3000` } = { port: process.env.PORT };
const { apiBase = `/api` } = { apiBase: process.env.API_BASE };
const { staticBase = `/` } = { staticBase: process.env.STATIC_BASE };

app.use(staticBase, staticPublic);
app.use(apiBase, routers);

try {
	app.listen(port, () => {
		log.info(`Server started at ${port} port`);
	});
} catch (error) {
	log.error(error);
}
