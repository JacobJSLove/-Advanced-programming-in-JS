/* global chai:false */
/* eslint no-console: 0 */

'use strict';

import converterPLN from '../src/index';
const expect = chai.expect;
const testNumber = 7;
const answer = 2;

describe ( 'converterPLN', () => {
	it( 'is a function', () => {
		expect( converterPLN ).to.be.a( 'function' );
	} ) ;
	it( 'check if return with testNumber is right ', () => {
		const result = converterPLN( testNumber );
		expect( result ).to.eql( answer );
	} ) ;
} );
