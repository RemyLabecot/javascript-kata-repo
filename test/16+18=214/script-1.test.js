import * as script from '../../src/16+18=214/script-1';


describe('16+18=214 testing', () => {
    it('Should make normal sum when the two numbers have 1 digit', () => {

        expect(script.sum(1, 2)).toBe(3);
        expect(script.sum(0, 2)).toBe(2);
        expect(script.sum(0, 0)).toBe(0);
        expect(script.sum(9, 9)).toBe(18);
    });

    it('Should return right boolean when number is superior of two digits length', () => {
        expect(script.haveMoreThanOneDigit(18)).toBe(true);
        expect(script.haveMoreThanOneDigit(9)).toBe(false);
    });

    it('Should return array of split numbers in digits', () => {
       expect(script.explodeNumber(18)).toStrictEqual([1, 8]);
       expect(script.explodeNumber(1234567890)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    });

    it('Should sum separatly each 2 digits of each numbers when one of the numbers have 2 digits', () => {
       expect(script.sum(18, 2)).toBe(110);
    });
});
