/**
 * List Controller file.
 */

'use strict';

import { Request, Response } from 'express';
import model from '../model/list.model';
import view from '../view/list.view';

export default (request: Request, response: Response): void => {
	const listData = model();
	view(request, response, listData);
};
