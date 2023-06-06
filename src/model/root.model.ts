/**
 * Root Model file.
 */

import randomStatus from '../util/random.status';
import HttpStatus from '../type/http.status';

export default (): HttpStatus => {
	const httpStatusCode = randomStatus();
	return httpStatusCode;
};
