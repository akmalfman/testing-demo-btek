const createCounter = (initialValue = 0) => {
    let count = initialValue;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => { count = 0; return count; },
        getCount: () => count
    };
};

module.exports = { createCounter };