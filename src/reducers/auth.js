import update from 'react-addons-update';


const initialState = {
    user: null,
    checkAuth: {
        phase: '',
    },
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_AUTH_STATE_START':
            return update(state, {
                checkAuth: {
                    phase: { $set: 'start' },
                },
            });
        case 'CHECK_AUTH_STATE_SUCCESS':
            return update(state, {
                user: { $set: action.result },
                checkAuth: {
                    phase: { $set: 'success' },
                },
            });
        case 'CHECK_AUTH_STATE_FAILED':
            return update(state, {
                checkAuth: {
                    phase: { $set: 'failed' },
                },
            });
        default:
            return state;
    }
};

export default app;
