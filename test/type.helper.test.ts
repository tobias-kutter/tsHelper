import { AvailableTypes } from '../src/availableTypes.enum';
import { ITypeHelper, typeHlpr } from '../src/type.helper';
import { describe, expect, it, ITestConstants, TestConstants, testValid } from './_TestBase';

const helper: ITypeHelper = typeHlpr;
const con: ITestConstants = new TestConstants();

/* tslint:disable:no-unused-expression */

function testReturnValueOfType(fn: any, expected: any, ...types: AvailableTypes[]): void {
    const title = 'should return ' + (expected ? 'true' : 'false') + ' if value is ';
    const buildExpect = (value: any, inverted?: boolean, callback?: () => void) => {
        if (inverted) {
            expect(fn(value)).to.not.be.equal(expected);
        } else {
            expect(fn(value)).to.be.equal(expected);
        }
        if (callback) {
            callback();
        }
    };

    types.forEach((item) => {
        switch (item) {
            case AvailableTypes.Array:
                it(title + 'array', () => buildExpect(con.arrayVal));
                it(title + 'array of numbers', () => buildExpect(con.arrayOfNumbers));
                it(title + 'array of objects', () => buildExpect(con.arrayOfObjects));
                it(title + 'array of strings', () => buildExpect(con.arrayOfStrings));
                it(title + 'empty array', () => buildExpect(con.emptyArrayVal));
                break;

            case AvailableTypes.Boolean:
                it(title + 'true', () => buildExpect(true));
                it(title + 'false', () => buildExpect(false));
                break;

            case AvailableTypes.Date:
                it(title + 'date', () => buildExpect(con.dateVal));
                break;

            case AvailableTypes.Function:
                it(title + 'function', () => buildExpect(con.functionVal));
                break;

            case AvailableTypes.Guid:
                it(title + 'guid', () => buildExpect(con.guidVal));
                break;

            case AvailableTypes.NaN:
                it(title + 'NaN', () => buildExpect(con.nanVal));
                break;

            case AvailableTypes.Null:
                it(title + 'null', () => buildExpect(con.nullVal));
                break;

            case AvailableTypes.Number:
                it(title + 'number', () => buildExpect(con.numberVal));
                it(title + 'max number', () => buildExpect(con.numberMaxVal));
                it(title + 'min number', () => buildExpect(con.numberMinVal));
                it(title + 'positive infinity', () => buildExpect(con.numberPosInfVal));
                it(title + 'negative infinity', () => buildExpect(con.numberNegInfVal));
                break;

            case AvailableTypes.Object:
                it(title + 'object', () => buildExpect(con.objectVal));
                break;

            case AvailableTypes.String:
                it(title + 'string', () => buildExpect(con.stringVal));
                break;

            case AvailableTypes.Undefined:
                it(title + 'undefined', () => buildExpect(con.undefVal));
                break;

            default:
                break;
        }
    });
}

/*
        it('should ', () => {

        });

        isDate: (variable: any) => boolean;
        isDateValid: (variable: any) => boolean;
        isFunction: (fn: any) => boolean;
        isGuid: (variable: any, allowEmptyGuid?: boolean) => boolean;
        isNumber: (variable: any) => boolean;
        isObject: (variable: any) => boolean;
        isString: (variable: any, checkEmptyString?: boolean) => boolean;
        type: (variable: any) => AvailableTypes;
        typeOf: (variable: any, ...expectedTypes: AvailableTypes[]) => boolean;
        typeOfArr: (variable: any, expectedTypes: AvailableTypes[]) => boolean;
*/

describe('typeHelper', () => {
    testValid(helper, 'object');

    describe('.areDefined', () => {
        testValid(helper.areDefined);

        it('should return true if all values are defined (single value)', () => {
            const result = helper.areDefined(con.objectVal);
            expect(result).to.be.true;
        });
        it('should return true if all values are defined (multiple values)', () => {
            const result = helper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.emptyStringVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.true;
        });

        it('should return false if one parameter is null (single value)', () => {
            const result = helper.areDefined(con.nullVal);
            expect(result).to.be.false;
        });
        it('should return false if one parameter is null (multiple values)', () => {
            const result = helper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.nullVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if first parameter is null (multiple values)', () => {
            const result = helper.areDefined(
                con.nullVal,
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if last parameter is null (multiple values)', () => {
            const result = helper.areDefined(
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal,
                con.nullVal);

            expect(result).to.be.false;
        });

        it('should return false if one parameter is undefined (single value)', () => {
            const result = helper.areDefined(con.undefVal);
            expect(result).to.be.false;
        });
        it('should return false if one parameter is undefined (multiple values)', () => {
            const result = helper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.undefVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if first parameter is undefined (multiple values)', () => {
            const result = helper.areDefined(
                con.undefVal,
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if last parameter is undefined (multiple values)', () => {
            const result = helper.areDefined(
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal,
                con.undefVal);

            expect(result).to.be.false;
        });

        it('should return false if one parameter is NaN (single value)', () => {
            const result = helper.areDefined(con.nanVal);
            expect(result).to.be.false;
        });
        it('should return false if one parameter is NaN (multiple values)', () => {
            const result = helper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.nanVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if first parameter is NaN (multiple values)', () => {
            const result = helper.areDefined(
                con.nanVal,
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if last parameter is NaN (multiple values)', () => {
            const result = helper.areDefined(
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal,
                con.nanVal);

            expect(result).to.be.false;
        });

        it('should return false if one parameter produces error (single value)', () => {
            const errorProducingVal: { foo: any } = { foo: {} };
            const result = helper.areDefined(errorProducingVal.foo.produceErr);
            expect(result).to.be.false;
        });
        it('should return false if one parameter produces error (multiple values)', () => {
            const errorProducingVal: { foo: any } = { foo: {} };
            const result = helper.areDefined(
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                errorProducingVal.foo.produceErr,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if first parameter produces error (multiple values)', () => {
            const errorProducingVal: { foo: any } = { foo: {} };
            const result = helper.areDefined(
                errorProducingVal.foo.produceErr,
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if last parameter produces error (multiple values)', () => {
            const errorProducingVal: { foo: any } = { foo: {} };
            const result = helper.areDefined(
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal,
                errorProducingVal.foo.produceErr);

            expect(result).to.be.false;
        });
    });

    describe('.isArray', () => {
        testValid(helper.isArray);
        testReturnValueOfType(helper.isArray, true, AvailableTypes.Array);
        testReturnValueOfType(helper.isArray, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.String,
            AvailableTypes.Number,
            AvailableTypes.Object,
            AvailableTypes.Date,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Function);
    });

    describe('.isDate', () => {
        testValid(helper.isDate);
        testReturnValueOfType(helper.isDate, true, AvailableTypes.Date);
        testReturnValueOfType(helper.isDate, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.String,
            AvailableTypes.Number,
            AvailableTypes.Object,
            AvailableTypes.Array,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Function);

        it('should return true if value is invalid date', () => {
            expect(helper.isDate(con.invalidDateVal)).to.be.true;
        });
    });

    describe('.isDateValid', () => {
        testValid(helper.isDateValid);
        testReturnValueOfType(helper.isDateValid, true, AvailableTypes.Date);
        testReturnValueOfType(helper.isDateValid, false,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.String,
            AvailableTypes.Object,
            AvailableTypes.Array,
            AvailableTypes.Guid,
            AvailableTypes.Function);

        it('should return false if date is invalid', () => {
            expect(helper.isDateValid(con.invalidDateVal)).to.not.be.false;
        });
    });

    describe('.isDefined', () => {
        testValid(helper.isDefined);
        testReturnValueOfType(helper.isDefined, true,
            AvailableTypes.Array,
            AvailableTypes.String,
            AvailableTypes.Number,
            AvailableTypes.Object,
            AvailableTypes.Date,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Function);
        testReturnValueOfType(helper.isDefined, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN);
    });

    describe('.nullOrUndef', () => {
        testValid(helper.nullOrUndef);
        testReturnValueOfType(helper.nullOrUndef, true,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN);
        testReturnValueOfType(helper.nullOrUndef, false,
            AvailableTypes.Array,
            AvailableTypes.String,
            AvailableTypes.Number,
            AvailableTypes.Object,
            AvailableTypes.Date,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Function);
    });
});
