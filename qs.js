const qs = require("qs");
const assert = require('assert');

assert.deepEqual(qs.parse('a%5Bb%5D=c'), {
    a: { b: 'c' }
});

assert.deepEqual(qs.parse('foo[bar][baz]=foobarbaz'), {
    foo: {
        bar: {
            baz: 'foobarbaz'
        }
    }
});

var limited = qs.parse('a=b&c=d', { parameterLimit: 1 });
assert.deepEqual(limited, { a: 'b' });