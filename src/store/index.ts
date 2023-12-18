import { createStore } from 'vuex';
import { UIModule } from './ui';

const state = () => ({});

export type RootState = ReturnType<typeof state>;

export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {
    UIModule,
  },
});
