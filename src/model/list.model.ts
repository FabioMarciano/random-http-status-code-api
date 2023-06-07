/**
 * List Model file.
 */

'use strict';

import HttpStatusMessage from '../type/http.status.message';

export default (): Record<number, string>[] => {
	const httpStatusText = Object.values(HttpStatusMessage);
	const httpStatusList: Record<number, string>[] = Object.keys(HttpStatusMessage).map((code, index) => ({
		code,
		message: httpStatusText[index],
	}));

	return httpStatusList;
};
