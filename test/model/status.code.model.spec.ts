import { root } from '../../src/model';

describe('Status Code Model', () => {
	it('Should get an string for response', () => {
		expect(typeof root()).toBe('number');
	});
});
