import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import {
    firebaseConnect,
    isLoaded,
    isEmpty,
    pathToJS,
} from 'react-redux-firebase';

class App extends Component {
    static propTypes = {
        firebase: PropTypes.shape({
            login: PropTypes.func.isRequired,
        })
    }

    login() {
        this.props.firebase
            .login({
                provider: 'facebook',
                type: 'redirect',
            })
            .then(() => {
                console.log('yo');
            })
            .catch((error) => {
                console.log('there was an error', error)
                console.log('error prop:', this.props.authError) // thanks to connect
            })
    }

    render() {
        const { auth } = this.props;

        return (
            <div>
                <h2>React Form</h2>
                <p>
                    {!isLoaded(auth) ? (
                        <span>Loading ...</span>
                    ) : (
                        isEmpty(auth) ? (
                            <span>We need to identify you. <button onClick={() => this.login()}>Login</button></span>
                        ) : (
                            <div>
                                <img src={auth.photoURL} />
                                Welcome <a href={`https://facebook.com/${auth.providerData[0].uid}`} target="_blank">{auth.displayName}</a>!
                                <pre>{JSON.stringify(auth, null, 4)}</pre>
                            </div>
                        )
                    )}
                </p>
            </div>
        );
    }
}

export default compose(
    firebaseConnect(),
    connect(
        ({ firebase }) => ({
            authError: pathToJS(firebase, 'authError'),
            auth: pathToJS(firebase, 'auth'),
        })
    )
)(App);
