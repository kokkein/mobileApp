import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    buttonSavePress(){
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || '1'});
    };

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.buttonSavePress.bind(this)}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

const styles={
    pickerStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) =>{
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate,employeeCreate}) (EmployeeCreate);