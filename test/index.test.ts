import { HelperInstance, tshlp } from '../src';
import { describe, expect, it, testValid } from './_TestBase';

/* tslint:disable:no-unused-expression */

describe('index', () => {
    testValid(tshlp, 'object');

    it('should be instance of HelperInstance', () => {
        // noinspection SuspiciousInstanceOfGuard
        expect(tshlp instanceof HelperInstance).to.be.true;
    });

    describe('.guid', () => {
        testValid(tshlp.guid, 'object');
    });

    describe('.string', () => {
        testValid(tshlp.string, 'object');
    });

    describe('.type', () => {
        testValid(tshlp.type, 'object');
    });

    describe('shortcut functions', () => {
        describe('.isDef', () => {
            testValid(tshlp.isDef, 'function');
        });
        describe('.areDef', () => {
            testValid(tshlp.areDef, 'function');
        });
    });

    describe('enumerations', () => {
        describe('types', () => {
            testValid(tshlp.types, 'object');
        });

        describe('environments', () => {
            testValid(tshlp.environments, 'object');
        });
    });
});