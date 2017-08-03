import firebase from 'firebase';
import fire from '../services/firebase';

export default {
    CHECK_AUTH_STATE(action, state) {
        return new Promise((res, rej) => {
            fire.auth().getRedirectResult().then((result) => {
                if (result.user) {
                    res(result.user);
                }
            });

            fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    res(user);
                } else {
                    const provider = new firebase.auth.FacebookAuthProvider();
                    provider.addScope('public_profile');
                    provider.addScope('email');
                    fire.auth().signInWithRedirect(provider);
                }
            });
        });
    },
};
