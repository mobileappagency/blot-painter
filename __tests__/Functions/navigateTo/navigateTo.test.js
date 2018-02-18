import { navigateTo } from '../../../src/lib';

describe('navigateTo helper :: Test Suite', () => {
    it('Throws an error if argument is not a string type', () => {
        expect(function() { navigateTo(2) }).toThrow(new Error('Invalid argument supplied as a navigated route.'));
    });

    it('Returns routing action made of supplied parameter', () => {
        
    });
});