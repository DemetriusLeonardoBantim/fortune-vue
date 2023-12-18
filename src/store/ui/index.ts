import { ActionTree, Module, MutationTree } from 'vuex';
import { RootState } from '..';

export type UIState = {
  extended: boolean;
};

const mutations: MutationTree<UIState> = {
  SET_EXTENDED(state, value) {
    state.extended = value;
  },
};

const actions: ActionTree<UIState, RootState> = {
  toggleSidebar({ commit, state }) {
    commit('SET_EXTENDED', !state.extended);
  },
};

export const UIModule: Module<UIState, RootState> = {
  state: () => ({
    extended: false,
  }),
  mutations,
  actions,
  namespaced: true,
};
