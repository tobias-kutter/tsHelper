import { stringHelper } from '../src/helpers/string.helper';
import { describe, expect, it, ITestConstants, TestConstants, testValid } from './_TestBase';

const con: ITestConstants = new TestConstants();

/* tslint:disable:no-unused-expression */

/*
it('should ', () => {});

    equals: fnEquals,
    format: fnFormat,
    formatArr: fnFormatArr,
    replaceAll: fnReplaceAll,
    trim: fnTrim,
    trimEnd: fnTrimEnd,
    trimStart: fnTrimStart
 */

describe('stringHelper', () => {
    testValid(stringHelper, 'object');

    describe('.capitalize', () => {
        testValid(stringHelper.capitalize, 'function');

        it('should return capitalized value', () => {
            const text: string = 'hello World!';
            const expectedResult: string = 'Hello World!';
            expect(stringHelper.capitalize(text)).to.be.equal(expectedResult);
        });

        it('should return capitalized character', () => {
            const text: string = 'h';
            const expectedResult: string = 'H';
            expect(stringHelper.capitalize(text)).to.be.equal(expectedResult);
        });

        it('should return same value if parameter is number', () => {
            const numberAsText: string = '42';
            expect(stringHelper.capitalize(numberAsText)).to.be.equal(numberAsText);
        });

        it('should return same value if parameter starts with number', () => {
            const numberAsText: string = '42hello everyone';
            expect(stringHelper.capitalize(numberAsText)).to.be.equal(numberAsText);
        });

        it('should return same value if parameter starts with whitespace', () => {
            const value: string = ' some awesome value';
            expect(stringHelper.capitalize(value)).to.be.equal(value);
        });

        it('should return same value if parameter is empty string', () => {
            expect(stringHelper.capitalize(con.emptyStringVal)).to.be.equal(con.emptyStringVal);
        });
    });

    describe('.capitalizeAll', () => {
        testValid(stringHelper.capitalizeAll, 'function');

        it('should capitalize every word', () => {
            const text: string = 'hello world! what a wonderful day.';
            const expectedResult: string = 'Hello World! What A Wonderful Day.';
            expect(stringHelper.capitalizeAll(text)).to.be.equal(expectedResult);
        });

        it('should capitalize every value in csv list', () => {
            const separatorChar: string = ',';
            const text: string = 'this,is,a,wonderful,day';
            const expectedResult: string = 'This,Is,A,Wonderful,Day';
            expect(stringHelper.capitalizeAll(text, separatorChar)).to.be.equal(expectedResult);
        });

        it('should convert to upper case if separator parameter is empty string', () => {
            const separatorChar: string = '';
            const text: string = 'hello world! what a wonderful day.';
            const expectedResult: string = 'HELLO WORLD! WHAT A WONDERFUL DAY.';
            expect(stringHelper.capitalizeAll(text, separatorChar)).to.be.equal(expectedResult);
        });

        it('should return same value if every word already capitalized', () => {
            const expectedResult: string = 'Hello World! What A Wonderful Day.';
            expect(stringHelper.capitalizeAll(expectedResult)).to.be.equal(expectedResult);
        });

        it('should return empty value if value is empty value', () => {
            const expectedResult: string = '';
            expect(stringHelper.capitalizeAll(expectedResult)).to.be.equal(expectedResult);
        });

        it('should return whitespace if value is whitespace', () => {
            const expectedResult: string = ' ';
            expect(stringHelper.capitalizeAll(expectedResult)).to.be.equal(expectedResult);
        });

        it('should return multiple whitespaces if value is multiple whitespaces', () => {
            const expectedResult: string = '       ';
            expect(stringHelper.capitalizeAll(expectedResult)).to.be.equal(expectedResult);
        });
    });

    describe('.concat', () => {
        testValid(stringHelper.concat, 'function');

        it('should concat string values', () => {
            const part1: string = 'Hell';
            const part2: string = 'o Wor';
            const part3: string = 'ld!';
            const expectedValue: string = 'Hello World!';
            expect(stringHelper.concat(part1, part2, part3)).to.be.equal(expectedValue);
        });

        it('should concat float number values', () => {
            const value: number = 10.541;
            const expectedValue: string = '10.541';
            expect(stringHelper.concat(value)).to.be.equal(expectedValue);
        });

        it('should concat and transform values to string', () => {
            const part1: number = 123;
            const part2: string = ' The ';
            const part3: string = 'answer ';
            const part4: string = 'is: ';
            const part5: number = 42;
            const expectedValue: string = '123 The answer is: 42';
            expect(stringHelper.concat(part1, part2, part3, part4, part5)).to.be.equal(expectedValue);
        });

        it('should concat and transform objects to string', () => {
            const value1: object = { foo: 'bar' };
            const value2: object = { sample: 42 };
            const expectedValue: string = value1.toString() + value2.toString();
            expect(stringHelper.concat(value1, value2)).to.be.equal(expectedValue);
        });

        it('should concat and transform array to string', () => {
            const value1: any[] = ['foo', 42, 'bar'];
            const value2: any[] = ['example', '0815'];
            const expectedValue: string = value1.toString() + value2.toString();
            expect(stringHelper.concat(value1, value2)).to.be.equal(expectedValue);
        });

        it('should return empty string if array is empty', () => {
            const expectedValue: string = '';
            expect(stringHelper.concat()).to.be.equal(expectedValue);
        });

        it('should return empty string if values are null', () => {
            const expectedValue: string = '';
            expect(stringHelper.concat(null, null)).to.be.equal(expectedValue);
        });

        it('should return empty string if values are undefined', () => {
            const expectedValue: string = '';
            expect(stringHelper.concat(undefined, undefined)).to.be.equal(expectedValue);
        });

        it('should return empty string if values are NaN', () => {
            const expectedValue: string = '';
            expect(stringHelper.concat(NaN, NaN)).to.be.equal(expectedValue);
        });
    });

    describe('.concatSep', () => {
        testValid(stringHelper.concatSep, 'function');

        it('should concat string values', () => {
            const separator: string = ' ';
            const part1: string = 'Hello';
            const part2: string = 'World';
            const part3: string = '!';
            const expectedValue: string = 'Hello World !';
            expect(stringHelper.concatSep(separator, [part1, part2, part3])).to.be.equal(expectedValue);
        });

        it('should concat float number values', () => {
            const separator: string = '-';
            const value1: number = 10.541;
            const value2: number = 21.0001;
            const expectedValue: string = '10.541-21.0001';
            expect(stringHelper.concatSep(separator, [value1, value2])).to.be.equal(expectedValue);
        });

        it('should concat and transform values to string', () => {
            const separator: string = ' ';
            const part1: number = 123;
            const part2: string = 'The';
            const part3: string = 'answer';
            const part4: string = 'is:';
            const part5: number = 42;
            const expectedValue: string = '123 The answer is: 42';
            expect(stringHelper.concatSep(separator, [part1, part2, part3, part4, part5])).to.be.equal(expectedValue);
        });

        it('should concat and transform objects to string', () => {
            const separator: string = ';';
            const value1: object = { foo: 'bar' };
            const value2: object = { sample: 42 };
            const expectedValue: string = value1.toString() + separator + value2.toString();
            expect(stringHelper.concatSep(separator, [value1, value2])).to.be.equal(expectedValue);
        });

        it('should concat and transform array to string', () => {
            const separator: string = '~';
            const value1: any[] = ['foo', 42, 'bar'];
            const value2: any[] = ['example', '0815'];
            const expectedValue: string = value1.toString() + separator + value2.toString();
            expect(stringHelper.concatSep(separator, [value1, value2])).to.be.equal(expectedValue);
        });

        it('should return empty string if array is empty', () => {
            const separator: string = '|';
            const expectedValue: string = '';
            expect(stringHelper.concatSep(separator, [])).to.be.equal(expectedValue);
        });

        it('should return empty string if values are null', () => {
            const separator: string = '|';
            const expectedValue: string = '';
            expect(stringHelper.concatSep(separator, [null, null])).to.be.equal(expectedValue);
        });

        it('should return empty string if values are undefined', () => {
            const separator: string = '|';
            const expectedValue: string = '';
            expect(stringHelper.concatSep(separator, [undefined, undefined])).to.be.equal(expectedValue);
        });

        it('should return empty string if values are NaN', () => {
            const separator: string = '|';
            const expectedValue: string = '';
            expect(stringHelper.concatSep(separator, [NaN, NaN])).to.be.equal(expectedValue);
        });
    });

    describe('.equals', () => {
        testValid(stringHelper.equals, 'function');
    });

    describe('.format', () => {
        testValid(stringHelper.format, 'function');
    });

    describe('.formatArr', () => {
        testValid(stringHelper.formatArr, 'function');
    });

    describe('.replaceAll', () => {
        testValid(stringHelper.replaceAll, 'function');
    });

    describe('.trim', () => {
        testValid(stringHelper.trim, 'function');
    });

    describe('.trimEnd', () => {
        testValid(stringHelper.trimEnd, 'function');
    });

    describe('.trimStart', () => {
        testValid(stringHelper.trimStart, 'function');
    });
});