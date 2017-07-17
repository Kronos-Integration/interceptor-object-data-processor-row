
import { RowProcessorInterceptor } from './lib/interceptor';

export RowProcessorInterceptor;

export function registerWithManager(manager) {
  return manager.registerInterceptor(Interceptor);
}
