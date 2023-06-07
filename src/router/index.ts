/**
 * Routers index file.
 */

'use strict';

import ping from './ping.router';
import root from './root.router';
import list from './list.router';
import statusCode from './status.code.router';

export default [ping, root, list, statusCode];
