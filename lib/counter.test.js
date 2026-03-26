const { default: expect } = require('expect');
const { createCounter } = require('./counter.js');

test('cek angka bertambah 1', () => {
    const counter = createCounter(0);
    counter.increment();
    expect(counter.getCount()).toBe(1);
});

test('cek angka berkurang 1', () => {
    const counter = createCounter(2);
    counter.decrement();
    expect(counter.getCount()).toBe(1)
})