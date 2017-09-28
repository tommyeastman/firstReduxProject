import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends React.Component {
    render() {
        return (
            <CardSection>
                <Text>
                    {this.props.librariesPassed.title}
                </Text>
            </CardSection>
        );
    }
}

export default ListItem;
