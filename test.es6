import {
	ok
}
from 'assert';
import noop from '../noop';

test('fj-noop', () => {
	ok(typeof noop === 'function');
	ok(noop() === undefined);
});
