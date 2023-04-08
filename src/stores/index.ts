import type { App } from 'vue';
import { createPinia, Pinia } from 'pinia';

const store: Pinia = createPinia();
export function setupStore(app: App<Element>): void {
  app.use(store);
}
