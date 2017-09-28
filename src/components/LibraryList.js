//render list of libraries to user
import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends React.Component {
    //boiler plate list view setup
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.librariesPassed);
        console.log(this.dataSource);
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
        <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
        />
        );
    }
}

const mapStatetoProps = (state) => (
    { librariesPassed: state.libraries }
);

export default connect(mapStatetoProps)(LibraryList);
