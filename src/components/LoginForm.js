import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
    state = { email: '', password: '', error: '', spinnerShow: false };

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            spinnerShow: false
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Sorry, another account with this email already exists.',
            spinnerShow: false
        });
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', spinnerShow: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.onLoginSuccess();
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        this.onLoginSuccess();
                    })
                    .catch(() => {
                        this.onLoginFail();
                    });
            });
    }


    renderButton() {
        if (this.state.spinnerShow) {
            return (<Spinner />);
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login / Create Account
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholderPassed="user@gmail.com"
                        valuePassed={this.state.email}
                        onChangeTextPassed={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholderPassed="******"
                        securePassed
                        valuePassed={this.state.password}
                        onChangeTextPassed={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
