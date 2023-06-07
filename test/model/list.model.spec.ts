import { list } from '../../src/model';

describe('List Model', () => {
	it('Should get an list with length greater than or equal 1', () => {
		expect(Object.keys(list()).length).toBeGreaterThanOrEqual(1);
	});
});
