/* jslint node: true, esnext: true */
"use strict";

const Interceptor = require('kronos-interceptor').Interceptor;
const parserFactory = require('./data-processor-row');

/**
 * This interceptor cares about the handling of the messages.
 * It will add the hops and copies the messages
 */
class RowProcessorInterceptor extends Interceptor {

	constructor(endpoint, config) {
		super(endpoint, config);

		// just validate the config once
		parserFactory(config, true);
	}

	static get type() {
		return "data-processor-row";
	}

	get type() {
		return RowProcessorInterceptor.type;
	}

	receive(request, oldRequest) {
		if (request.payload) {
			const streamFilter = parserFactory(this.config);
			const stream = request.payload;
			request.payload = stream.pipe(streamFilter);
		}
		return this.connected.receive(request, oldRequest);
	}
}
exports.Interceptor = RowProcessorInterceptor;
