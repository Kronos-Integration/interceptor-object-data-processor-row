/* jslint node: true, esnext: true */
"use strict";

import RowProcessorInterceptor from './RowProcessorInterceptor';

import {
  DataProcessorRowFactory
}
from './data-processor-row';

import {
  createChecks
}
from './converter/data-field-splitter';

function registerWithManager(manager) {
  return manager.registerInterceptor(RowProcessorInterceptor);
}

export {
  DataProcessorRowFactory,
  RowProcessorInterceptor,
  registerWithManager,
  createChecks
};
