/**
 * Random HTTP Status utility file.
 */

import HttpStatus from '../type/http.status';

export default <HttpStatus>(): HttpStatus[keyof HttpStatus] => {
	const values = Object.keys(HttpStatus)
		.map((item) => Number.parseInt(item))
		.filter((item) => !Number.isNaN(item)) as unknown as HttpStatus[keyof HttpStatus][];
	const index = Math.floor(Math.random() * values.length);
	const value = values[index];

	return value;
};
