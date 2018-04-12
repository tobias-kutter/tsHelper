import { GUID_EMPTY, RegExpCollection } from '../src/constants';

import * as chaiLib from 'chai';
import * as mochaLib from 'mocha';

export const MockBrowser = require('mock-browser').mocks.MockBrowser;
export const AbstractBrowser = require('mock-browser').delegates.AbstractBrowser;

export const describe = mochaLib.describe;
export const it = mochaLib.it;
export const after = mochaLib.after;
export const afterEach = mochaLib.afterEach;
export const before = mochaLib.before;
export const beforeEach = mochaLib.beforeEach;

export const assert = chaiLib.assert;
export const expect = chaiLib.expect;
export const should = chaiLib.should;

/* tslint:disable:no-unused-expression */
export function testValid(value: any, type?: string): void {
    if (!type) {
        type = 'function';
    }
    it('should be defined', () => {
        expect(value).to.not.be.undefined;
        expect(value).to.not.be.null;
    });
    it('should be ' + type, () => {
        expect(value).to.be.a(type || 'undefined');
    });
}

export interface ITestConstantRegExpContainer {
    guid: RegExp;
    emptyGuid: RegExp;
    validGuid: RegExp;
}

export interface ITestConstants {
    undefVal: undefined;
    nullVal: null;
    nanVal: number;

    stringVal: string;
    emptyStringVal: string;

    numberVal: number;
    numberPosInfVal: number;
    numberNegInfVal: number;
    numberMaxVal: number;
    numberMinVal: number;

    objectVal: object;
    emptyObjectVal: object;

    arrayVal: any[];
    arrayOfNumbers: number[];
    arrayOfStrings: string[];
    arrayOfObjects: object[];
    emptyArrayVal: any[];

    functionVal: () => void;

    dateVal: Date;
    invalidDateVal: Date;

    guidVal: string;
    emptyGuidVal: string;

    regExp: ITestConstantRegExpContainer;
}

export class TestConstants implements ITestConstants {
    public get stringVal(): string {
        return this.mStringVal;
    }

    public get emptyStringVal(): string {
        return this.mEmptyStringVal;
    }

    public get numberVal(): number {
        return this.mNumberVal;
    }

    public get numberMaxVal(): number {
        return this.mNumberMaxVal;
    }

    public get numberMinVal(): number {
        return this.mNumberMinVal;
    }

    public get numberNegInfVal(): number {
        return this.mNumberNegInfVal;
    }

    public get numberPosInfVal(): number {
        return this.mNumberPosInfVal;
    }

    public get nanVal(): number {
        return this.mNanVal;
    }

    public get nullVal(): null {
        return this.mNullVal;
    }

    public get undefVal(): undefined {
        return this.mUndefVal;
    }

    public get objectVal(): object {
        return this.mObjectVal;
    }

    public get emptyObjectVal(): object {
        return this.mEmptyObjectVal;
    }

    public get arrayVal(): any[] {
        return this.mArrayVal;
    }

    public get arrayOfNumbers(): number[] {
        return this.mArrayOfNumbers;
    }

    public get arrayOfStrings(): string[] {
        return this.mArrayOfStrings;
    }

    public get arrayOfObjects(): object[] {
        return this.mArrayOfObjects;
    }

    public get emptyArrayVal(): any[] {
        return this.mEmptyArrayVal;
    }

    public get functionVal(): () => void {
        return this.mFunctionVal;
    }

    public get dateVal(): Date {
        return this.mDateVal;
    }

    public get invalidDateVal(): Date {
        return this.mDateVal;
    }

    public get guidVal(): string {
        return this.mGuid;
    }

    public get emptyGuidVal(): string {
        return this.mEmptyGuid;
    }

    public get regExp(): ITestConstantRegExpContainer {
        return this.mRegExp;
    }

    private readonly mStringVal: string;
    private readonly mEmptyStringVal: string;

    private readonly mNumberVal: number;
    private readonly mNumberMaxVal: number;
    private readonly mNumberMinVal: number;
    private readonly mNumberNegInfVal: number;
    private readonly mNumberPosInfVal: number;

    private readonly mNanVal: number;
    private readonly mNullVal: null;
    private readonly mUndefVal: undefined;

    private readonly mArrayOfNumbers: number[];
    private readonly mArrayOfObjects: object[];
    private readonly mArrayOfStrings: string[];
    private readonly mArrayVal: any[];
    private readonly mEmptyArrayVal: any[];

    private readonly mObjectVal: object;
    private readonly mEmptyObjectVal: object;

    private readonly mFunctionVal: () => void;

    private readonly mDateVal: Date;
    private readonly mDateInvalidVal: Date;

    private readonly mGuid: string;
    private readonly mEmptyGuid: string;

    private readonly mRegExp: ITestConstantRegExpContainer;

    public constructor() {
        /* tslint:disable:no-empty */

        this.mStringVal = 'Sample string!';
        this.mEmptyStringVal = '';

        this.mNumberVal = 42;
        this.mNumberMaxVal = Number.MAX_VALUE;
        this.mNumberMinVal = Number.MIN_VALUE;
        this.mNumberNegInfVal = Number.NEGATIVE_INFINITY;
        this.mNumberPosInfVal = Number.POSITIVE_INFINITY;

        this.mNanVal = Number.NaN;
        this.mNullVal = null;
        this.mUndefVal = undefined;

        this.mArrayVal = [0, 8.44, 15, 'Hello', { some: 'value' }, [0, 1.1, 2]];
        this.mArrayOfNumbers = [23, 45, 563, 32.2, 22, 56];
        this.mArrayOfObjects = [{ some: 'value' }, { someOther: 'value' }, { thirdAwesomeValue: 42 }];
        this.mArrayOfStrings = ['sample value 08/15', 'foo', 'Bar'];
        this.mEmptyArrayVal = [];

        this.mObjectVal = { someText: 'foo bar', someNumber: 1423, someOtherNumber: 42.32 };
        this.mEmptyObjectVal = {};

        this.mFunctionVal = () => {
        };

        this.mDateVal = new Date();
        this.mDateInvalidVal = new Date(0, Number.NaN, undefined);

        this.mGuid = '18fa67fe-05ae-41af-84a5-610e844379d1';
        this.mEmptyGuid = GUID_EMPTY;

        this.mRegExp = {
            guid: RegExpCollection.guid.GENERAL,
            validGuid: RegExpCollection.guid.VALID,
            emptyGuid: RegExpCollection.guid.EMPTY
        };

        /* tslint:enable:no-empty */
    }
}