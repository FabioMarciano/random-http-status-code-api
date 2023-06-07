/**
 * Root Model file.
 */

'use strict';

import randomStatus from '../util/random.status';
import HttpStatusCode from '../type/http.status.code';

export default (): HttpStatusCode => {
	const httpStatusCode = randomStatus();
	return httpStatusCode;
};
