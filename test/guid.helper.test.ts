import { guidHelper } from '../src/helpers/guid.helper';
import { describe, expect, it, ITestConstants, TestConstants, testValid } from './_TestBase';

const con: ITestConstants = new TestConstants();

/* tslint:disable:no-unused-expression */

describe('guidHelper', () => {
    testValid(guidHelper, 'object');

    describe('.emptyGuid', () => {
        testValid(guidHelper.emptyGuid, 'string');

        it('should return empty guid', () => {
            expect(guidHelper.emptyGuid).to.be.equal(con.emptyGuidVal);
        });
    });

    describe('.generate', () => {
        testValid(guidHelper.generate);

        it('should return a guid as string', () => {
            expect(guidHelper.generate()).to.be.a('string');
        });

        it('should match guid pattern', () => {
            expect(guidHelper.generate()).to.match(con.regExp.guid);
        });

        it('should return a valid guid', () => {
            expect(guidHelper.generate()).to.match(con.regExp.validGuid);
        });

        it('should not return empty guid pattern', () => {
            expect(guidHelper.generate()).to.not.match(con.regExp.emptyGuid);
        });
    });

    describe('.isEmptyGuid', () => {
        testValid(guidHelper.isEmptyGuid);

        it('should return true if param is empty guid', () => {
            expect(guidHelper.isEmptyGuid(con.emptyGuidVal)).to.be.true;
        });

        it('should return false if param is valid guid', () => {
            expect(guidHelper.isEmptyGuid(con.guidVal)).to.be.false;
        });

        it('should return false if param is empty string', () => {
            expect(guidHelper.isEmptyGuid('')).to.be.false;
        });

        it('should return false if param is not a guid', () => {
            expect(guidHelper.isEmptyGuid(con.stringVal)).to.be.false;
        });
    });

    describe('.isValidGuid', () => {
        testValid(guidHelper.isValidGuid);

        it('should return false if param is empty guid', () => {
            expect(guidHelper.isValidGuid(con.emptyGuidVal)).to.be.false;
        });

        it('should return true if param is valid guid', () => {
            expect(guidHelper.isValidGuid(con.guidVal)).to.be.true;
        });

        it('should return false if param is empty string', () => {
            expect(guidHelper.isValidGuid('')).to.be.false;
        });

        it('should return false if param is not a guid', () => {
            expect(guidHelper.isValidGuid(con.stringVal)).to.be.false;
        });
    });

    describe('.pattern', () => {
        testValid(guidHelper.pattern, 'object');

        describe('.empty', () => {
            testValid(guidHelper.pattern.empty, 'RegExp');
        });

        describe('.general', () => {
            testValid(guidHelper.pattern.general, 'RegExp');
        });

        describe('.valid', () => {
            testValid(guidHelper.pattern.valid, 'RegExp');
        });
    });
});