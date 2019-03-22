import types from "./types";

export const actions = {
    setStep({state, commit}, data) {
        commit(types.SET_STEP, data)
    },
}
