import { actions } from "./actions";
import { mutations } from "./mutations";

export default {
    namespaced: true,
    state: {
        step: null,
    },
    mutations,
    actions,
};
