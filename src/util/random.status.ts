/**
 * Random HTTP Status utility file.
 */

'use strict';

import HttpStatusCode from '../type/http.status.code';

export default <HttpStatusCode>(): HttpStatusCode[keyof HttpStatusCode] => {
	const values = Object.keys(HttpStatusCode)
		.map((item) => Number.parseInt(item))
		.filter((item) => !Number.isNaN(item)) as unknown as HttpStatusCode[keyof HttpStatusCode][];
	const index = Math.floor(Math.random() * values.length);
	const value = values[index];

	return value;
};
