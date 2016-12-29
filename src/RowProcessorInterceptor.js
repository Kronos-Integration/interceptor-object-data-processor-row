/* jslint node: true, esnext: true */
'use strict';

import {
	Interceptor
}
from 'kronos-interceptor';

import {
	DataProcessorRowFactory
}
from './data-processor-row';

/**
 * This interceptor cares about the handling of the messages.
 * It will add the hops and copies the messages
 */
export default class RowProcessorInterceptor extends Interceptor {

	constructor(config, endpoint) {
		super(config, endpoint);

		// just validate the config once
		DataProcessorRowFactory(config.config, true);
	}

	static get name() {
		return 'data-processor-row';
	}

	receive(request, oldRequest) {
		if (request.payload) {
			const streamFilter = DataProcessorRowFactory(this.config.config);
			const stream = request.payload;
			request.payload = stream.pipe(streamFilter);
		}
		return this.connected.receive(request, oldRequest);
	}
}
