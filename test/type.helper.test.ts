import { AvailableTypes } from '../src/enumerations/availableTypes.enum';
import { typeHelper } from '../src/helpers/type.helper';
import { describe, expect, it, ITestConstants, TestConstants, testValid } from './_TestBase';

const con: ITestConstants = new TestConstants();

/* tslint:disable:no-unused-expression */

describe('typeHelper', () => {
    testValid(typeHelper, 'object');

    describe('.areDefined', () => {
        testValid(typeHelper.areDefined);

        it('should return true if all values are defined (single value)', () => {
            const result = typeHelper.areDefined(con.objectVal);
            expect(result).to.be.true;
        });
        it('should return true if all values are defined (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.emptyStringVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.true;
        });

        it('should return false if one parameter is null (single value)', () => {
            const result = typeHelper.areDefined(con.nullVal);
            expect(result).to.be.false;
        });
        it('should return false if one parameter is null (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.nullVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if first parameter is null (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.nullVal,
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if last parameter is null (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal,
                con.nullVal);

            expect(result).to.be.false;
        });

        it('should return false if one parameter is undefined (single value)', () => {
            const result = typeHelper.areDefined(con.undefVal);
            expect(result).to.be.false;
        });
        it('should return false if one parameter is undefined (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.undefVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if first parameter is undefined (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.undefVal,
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if last parameter is undefined (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal,
                con.undefVal);

            expect(result).to.be.false;
        });

        it('should return false if one parameter is NaN (single value)', () => {
            const result = typeHelper.areDefined(con.nanVal);
            expect(result).to.be.false;
        });
        it('should return false if one parameter is NaN (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.numberVal,
                con.stringVal,
                con.emptyArrayVal,
                con.nanVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if first parameter is NaN (multiple values)', () => {
            const result = typeHelper.areDefined(
                con.nanVal,
                con.stringVal,
                con.emptyArrayVal,
                con.numberVal,
                con.objectVal,
                con.functionVal);

            expect(result).to.be.false;
        });
        it('should return false if last parameter is NaN (multiple values)', () => {
            const result = typeHelper.areDefined(
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
            const result = typeHelper.areDefined(errorProducingVal.foo.produceErr);
            expect(result).to.be.false;
        });
        it('should return false if one parameter produces error (multiple values)', () => {
            const errorProducingVal: { foo: any } = { foo: {} };
            const result = typeHelper.areDefined(
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
            const result = typeHelper.areDefined(
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
            const result = typeHelper.areDefined(
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
        testValid(typeHelper.isArray);
        testReturnValueOfType(typeHelper.isArray, true, AvailableTypes.Array);
        testReturnValueOfType(typeHelper.isArray, false,
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
        testValid(typeHelper.isDate);
        testReturnValueOfType(typeHelper.isDate, true, AvailableTypes.Date);
        testReturnValueOfType(typeHelper.isDate, false,
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
            expect(typeHelper.isDate(con.invalidDateVal)).to.be.true;
        });
    });

    describe('.isDateValid', () => {
        testValid(typeHelper.isDateValid);
        testReturnValueOfType(typeHelper.isDateValid, true, AvailableTypes.Date);
        testReturnValueOfType(typeHelper.isDateValid, false,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.String,
            AvailableTypes.Object,
            AvailableTypes.Array,
            AvailableTypes.Guid,
            AvailableTypes.Function);

        it('should return false if date is invalid', () => {
            expect(typeHelper.isDateValid(con.invalidDateVal)).to.not.be.false;
        });
    });

    describe('.isDefined', () => {
        testValid(typeHelper.isDefined);
        testReturnValueOfType(typeHelper.isDefined, true,
            AvailableTypes.Array,
            AvailableTypes.String,
            AvailableTypes.Number,
            AvailableTypes.Object,
            AvailableTypes.Date,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Function);
        testReturnValueOfType(typeHelper.isDefined, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN);
    });

    describe('.isFunction', () => {
        testValid(typeHelper.isFunction);
        testReturnValueOfType(typeHelper.isFunction, true, AvailableTypes.Function);
        testReturnValueOfType(typeHelper.isFunction, false,
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
            AvailableTypes.Date);
    });

    describe('.isGuid', () => {
        testValid(typeHelper.isGuid);
        testReturnValueOfType(typeHelper.isGuid, true, AvailableTypes.Guid);
        testReturnValueOfType(typeHelper.isGuid, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.String,
            AvailableTypes.Number,
            AvailableTypes.Object,
            AvailableTypes.Array,
            AvailableTypes.Function,
            AvailableTypes.Boolean,
            AvailableTypes.Date);

        it('should not allow empty guid if parameter is set', () => {
            expect(typeHelper.isGuid(con.emptyGuidVal, false)).to.be.false;
            expect(typeHelper.isGuid(con.guidVal, false)).to.be.true;
        });
        it('should allow empty guid if parameter is unset or true', () => {
            expect(typeHelper.isGuid(con.emptyGuidVal)).to.be.true;
            expect(typeHelper.isGuid(con.emptyGuidVal, true)).to.be.true;
            expect(typeHelper.isGuid(con.guidVal, true)).to.be.true;
        });
    });

    describe('.isNumber', () => {
        testValid(typeHelper.isNumber);
        testReturnValueOfType(typeHelper.isNumber, true, AvailableTypes.Number);
        testReturnValueOfType(typeHelper.isNumber, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.String,
            AvailableTypes.Function,
            AvailableTypes.Object,
            AvailableTypes.Array,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Date);
    });

    describe('.isObject', () => {
        testValid(typeHelper.isObject);
        testReturnValueOfType(typeHelper.isObject, true, AvailableTypes.Object);
        testReturnValueOfType(typeHelper.isObject, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.String,
            AvailableTypes.Function,
            AvailableTypes.Number,
            AvailableTypes.Array,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Date);
    });

    describe('.isString', () => {
        testValid(typeHelper.isString);
        testReturnValueOfType(typeHelper.isString, true, AvailableTypes.String, AvailableTypes.Guid);
        testReturnValueOfType(typeHelper.isString, false,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN,
            AvailableTypes.Object,
            AvailableTypes.Function,
            AvailableTypes.Number,
            AvailableTypes.Array,
            AvailableTypes.Boolean,
            AvailableTypes.Date);
    });

    describe('.nullOrUndef', () => {
        testValid(typeHelper.nullOrUndef);
        testReturnValueOfType(typeHelper.nullOrUndef, true,
            AvailableTypes.Null,
            AvailableTypes.Undefined,
            AvailableTypes.Unknown,
            AvailableTypes.NaN);
        testReturnValueOfType(typeHelper.nullOrUndef, false,
            AvailableTypes.Array,
            AvailableTypes.String,
            AvailableTypes.Number,
            AvailableTypes.Object,
            AvailableTypes.Date,
            AvailableTypes.Guid,
            AvailableTypes.Boolean,
            AvailableTypes.Function);
    });

    describe('.type', () => {
        testValid(typeHelper.type);

        for (const item in AvailableTypes) {
            if (!Number.isNaN(Number(item))) {
                const returnTxt = AvailableTypes[item] === 'NaN' ?
                    AvailableTypes[item] :
                    AvailableTypes[item].toLowerCase();

                testReturnValueOfTypeSetTitle(
                    typeHelper.type,
                    `should return ${returnTxt} if value is `,
                    Number(item),
                    Number(item));
            }
        }

        it('should not return false values', () => {
            for (const item in AvailableTypes) {
                if (!Number.isNaN(Number(item))) {
                    const wrongType = Number(item) === Number(AvailableTypes.Array) ?
                        Number(AvailableTypes.String) :
                        Number(AvailableTypes.Array);

                    expect(typeHelper.type(AvailableTypes[item])).to.not.equal(AvailableTypes[wrongType]);
                }
            }
        });
    });

    // ToDo
    describe('.typeOf', () => {
        testValid(typeHelper.typeOf);
    });

    // ToDo
    describe('.typeOfArr', () => {
        testValid(typeHelper.typeOfArr);
    });
});

function testReturnValueOfType(fn: any, expected: any, ...types: AvailableTypes[]): void {
    const title = 'should return ' + expected.toString() + ' if value is ';
    return testReturnValueOfTypeSetTitle(fn, title, expected, ...types);
}

function testReturnValueOfTypeSetTitle(fn: any, title: string, expected: any, ...types: AvailableTypes[]): void {
    const buildExpect = (value: any, callback?: () => void) => {
        expect(fn(value)).to.be.equal(expected);
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
                it(title + 'empty object', () => buildExpect(con.emptyObjectVal));
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