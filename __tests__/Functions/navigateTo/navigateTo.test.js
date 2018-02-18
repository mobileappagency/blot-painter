import { navigateTo } from '../../../src/lib';

describe('navigateTo helper :: Test Suite', () => {
    it('Throws an error if invalid number of parameters supplied', () => {
        expect(function() { navigateTo({}) }).toThrow(new Error('Not enough arguments supplied: route name is required.'))
    });

    it('Throws an error if first argument is not an object type', () => {
        expect(function() { navigateTo('props', 'routeName') }).toThrow(new Error('Props argument must be type of object.'))
    });

    it('Throws an error if second argument is not a string type', () => {
        expect(function() { navigateTo({}, 2) }).toThrow(new Error('Invalid argument supplied as a navigated route.'));
    });
});