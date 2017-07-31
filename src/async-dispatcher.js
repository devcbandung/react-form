import store from './services/store';
import actionHandlers from './actionhandlers';

export const dispatchAsync = (action) => {
    const handler = actionHandlers[action.type];
    store.dispatch({
        ...action,
        type: `${action.type}_START`,
    });

    handler(action, store.getState())
        .then(result => {
            store.dispatch({
                type: `${action.type}_SUCCESS`,
                result,
            });
        })
        .catch(err => {
            store.dispatch({
                type: `${action.type}_FAILED`,
                err,
            });
        });
};
