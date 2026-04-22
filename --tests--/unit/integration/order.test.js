const { orderDrink } = require('../../../src/coffeeshop');

describe('Coffee Shop Integration', () => {
    test('full flow for ordering a latte should succeed', () => {
        const result = orderDrink('latte');
        expect(result).toBe(true);
    });
});
