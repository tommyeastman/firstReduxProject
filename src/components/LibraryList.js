//render list of libraries to user
import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends React.Component {
    //boiler plate list view setup
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.DataSource = ds.cloneWithRows(this.props.librariesPassed);
    }

    renderRowHelper() {
        
    }

    render() {
        return (
        <ListView
            dataSource={this.DataSource}
            renderRow={this.renderRowHelper}
        />
        );
    }
}

const mapStatetoProps = (state) => (
    { librariesPassed: state.libraries }
);

export default connect(mapStatetoProps)(LibraryList);
