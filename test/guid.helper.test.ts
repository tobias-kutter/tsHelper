import { guidHelper, IGuidHelper } from '../src/helpers/guid.helper';
import { describe, expect, it, ITestConstants, TestConstants, testValid } from './_TestBase';

const helper: IGuidHelper = guidHelper;
const con: ITestConstants = new TestConstants();

/* tslint:disable:no-unused-expression */

describe('guidHelper', () => {
    testValid(helper, 'object');

    describe('.emptyGuid', () => {
        testValid(helper.emptyGuid, 'string');

        it('should return empty guid', () => {
            expect(helper.emptyGuid).to.be.equal(con.emptyGuidVal);
        });
    });

    describe('.generate', () => {
        testValid(helper.generate);

        it('should return a guid as string', () => {
            expect(helper.generate()).to.be.a('string');
        });

        it('should match guid pattern', () => {
            expect(helper.generate()).to.match(con.regExp.guid);
        });

        it('should return a valid guid', () => {
            expect(helper.generate()).to.match(con.regExp.validGuid);
        });

        it('should not return empty guid pattern', () => {
            expect(helper.generate()).to.not.match(con.regExp.emptyGuid);
        });
    });

    describe('.isEmptyGuid', () => {
        testValid(helper.isEmptyGuid);

        it('should return true if param is empty guid', () => {
            expect(helper.isEmptyGuid(con.emptyGuidVal)).to.be.true;
        });

        it('should return false if param is valid guid', () => {
            expect(helper.isEmptyGuid(con.guidVal)).to.be.false;
        });

        it('should return false if param is empty string', () => {
            expect(helper.isEmptyGuid('')).to.be.false;
        });

        it('should return false if param is not a guid', () => {
            expect(helper.isEmptyGuid(con.stringVal)).to.be.false;
        });
    });

    describe('.isValidGuid', () => {
        testValid(helper.isValidGuid);

        it('should return false if param is empty guid', () => {
            expect(helper.isValidGuid(con.emptyGuidVal)).to.be.false;
        });

        it('should return true if param is valid guid', () => {
            expect(helper.isValidGuid(con.guidVal)).to.be.true;
        });

        it('should return false if param is empty string', () => {
            expect(helper.isValidGuid('')).to.be.false;
        });

        it('should return false if param is not a guid', () => {
            expect(helper.isValidGuid(con.stringVal)).to.be.false;
        });
    });

    describe('.pattern', () => {
        testValid(helper.pattern, 'object');

        describe('.empty', () => {
            testValid(helper.pattern.empty, 'RegExp');
        });

        describe('.general', () => {
            testValid(helper.pattern.general, 'RegExp');
        });

        describe('.valid', () => {
            testValid(helper.pattern.valid, 'RegExp');
        });
    });
});