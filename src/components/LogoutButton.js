import React from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection } from './common';

const LogoutButton = () => (

    <Card>
        <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
                Logout
                </Button>
        </CardSection>
    </Card>
);

export default LogoutButton;
