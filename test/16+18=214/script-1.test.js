import * as script from '../../src/16+18=214/script-1';


describe('16+18=214 testing', () => {
    it('should handle addition of a given number with potential sums of suboperations', () => {

        expect(script.sum(1, 2)).toBe(3);
        expect(script.sum(0, 2)).toBe(2);
        expect(script.sum(0, 0)).toBe(0);
        expect(script.sum(9, 9)).toBe(18);
        expect(script.sum(18, 2)).toBe(110);
        expect(script.sum(26, 39)).toBe(515);
        expect(script.sum(122, 81)).toBe(1103);
        expect(script.sum(1222, 30277)).toBe(31499);
        expect(script.sum(1236, 30977)).toBe(31111013);
        expect(script.sum(38810, 1383)).toBe(391193);
        expect(script.sum(49999, 49999)).toBe(818181818);
    });

    it('Should return right boolean when number is superior of two digits length', () => {
        expect(script.haveMoreThanOneDigit(18)).toBe(true);
        expect(script.haveMoreThanOneDigit(9)).toBe(false);
    });

    it('Should return array of split numbers in digits', () => {
       expect(script.explodeNumber(18)).toStrictEqual([1, 8]);
       expect(script.explodeNumber(1234567890)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    });
});
