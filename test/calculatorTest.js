'use strict';

const {expect} = require('chai');
const calculator = require('../app/calculator');

describe('Calculator test', () => {
    describe('Testing the operations', () => {
        it('Testing sum operation', () => {
            expect(calculator.add(1,1)).to.equal(1+1);
        });
        it('Testing minus operation', () => {
            expect(calculator.minus(1,1)).to.equal(1-1);
        });
        it('Testing multiply operation', () => {
            expect(calculator.multiply(3,3)).to.equal(3*3);
        });
        it('Testing divide operation', () => {
            expect(calculator.divide(3,3)).to.equal(3/3);
        });
        it('Testing divide operation by zero', () => {
            const expectedError = new Error("Can't divide by zero");
            expect(calculator.divide(3,0).message).to.equal(expectedError.message);
        });
    });
});
