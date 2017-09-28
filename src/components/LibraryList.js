//render list of libraries to user
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends React.Component {
    render() {
        console.log(this.props.librariesPassed);
        return (
        <View />
        );
    }
}

const mapStatetoProps = (state) => (
    { librariesPassed: state.libraries }
);

export default connect(mapStatetoProps)(LibraryList);
