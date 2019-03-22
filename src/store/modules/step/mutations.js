import types from './types';

export const mutations = {
    [types.SET_STEP](state, val) {
        state.step = val
    },
}
