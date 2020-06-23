import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from './common';

class EmployeeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Watson"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'name', value})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="222-222"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'phone', value})
            }
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({prop: 'shift', value})
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednsday" value="Wednsday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    marginRight: 35,
  },
};

const mapStateToProps = state => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift,
  };
};

export default connect(
  mapStateToProps,
  {employeeUpdate},
)(EmployeeeForm);
