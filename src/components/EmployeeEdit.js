import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Confirm } from './common';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate,employeeEdit,employeeDelete} from '../actions';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';


class EmployeeEdit extends Component {
    state = {showModal: false};

    componentWillMount(){
        console.log(this.props);
        _.each(this.props.selectedEmployee, (value, prop)=>{
            this.props.employeeUpdate({prop, value});
        });
    };

    buttonSavePress(){
        const {name, phone, shift} = this.props;
        this.props.employeeEdit({name, phone, shift, uid: this.props.selectedEmployee.uid});
    };
    buttonTextPress(){
        const { phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }
    onDecline(){
        this.setState({showModal: false});
    }
    onAccept(){
        const {uid} = this.props.selectedEmployee;
        this.props.employeeDelete({uid});

        //this.props.employeeDelete({uid: this.props.selectedEmployee.uid});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.buttonSavePress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.buttonTextPress.bind(this)}>
                        Text Employee
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Delete
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
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

export default connect(mapStateToProps, {employeeUpdate,employeeEdit,employeeDelete}) (EmployeeEdit);