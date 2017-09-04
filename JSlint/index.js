/* eslint no-console: 0 */
'use strict';

const chalk = require( 'chalk' ),
	logger = {
		success( msg ) {
			console.log ( chalk.green.bold( 'OK:' ), msg );
		},
		error( msg ) {
			console.log ( chalk.red.bold( 'Error:' ), msg );
		},
		warrning( msg ) {
			console.log ( chalk.yellow.bold( 'Warrning:' ), msg );
		},
		info( msg ) {
			console.log ( chalk.blue.bold( 'Info:' ), msg );
		}
	};
logger.success( 'działa' );
logger.error( ' nie działa' );
logger.warrning( 'błąd?' );
logger.info( 'wtf ?' );
