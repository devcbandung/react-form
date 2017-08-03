import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
    static propTypes = {
        user: PropTypes.object,
        checkAuth: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div>
                <h2>React Form</h2>
                <p>
                    {this.props.user ? (
                        <span>{JSON.stringify(this.props.user)}</span>
                    ) : (
                        <span>Loading ...</span>
                    )}
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        checkAuth: state.auth.checkAuth.phase,
    }
}

export default connect(mapStateToProps)(App);
