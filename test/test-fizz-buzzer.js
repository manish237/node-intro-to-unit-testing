const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    // test the normal case
    it('should return different strings for different multiples of 3,5,15', function() {
        // range of normal inputs, including
        // cases like negative answers
        const normalCases = [
            {a: -49, expected: -49},
            {a: 49, expected: 49},
            {a: 6, expected: 'fizz'},
            {a: -6, expected: 'fizz'},
            {a: 20, expected: 'buzz'},
            {a: 60, expected: 'fizz-buzz'}
        ];
        // for each input (a), `fizzBuzzer` should
        // produce the expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            answer.should.equal(input.expected);
        });
    });

    it('should raise error if arg not a number', function() {
        // range of bad inputs
        const badInputs = [
            ['a'],
            ['A']
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input[0])
            }).should.throw(Error);
        });
    });
});