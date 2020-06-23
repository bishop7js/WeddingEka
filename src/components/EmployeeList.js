import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListView from 'deprecated-react-native-listview';
import {
  Container,
  Content,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({employees}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <Container>
        <Content style={styles.contentStyle}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
    backgroundColor: '#FDE2EE',
  },
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(
  mapStateToProps,
  {employeesFetch},
)(EmployeeList);
