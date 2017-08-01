import { RowProcessorInterceptor } from './interceptor';

export { RowProcessorInterceptor };

export function registerWithManager(manager) {
  return manager.registerInterceptor(Interceptor);
}
