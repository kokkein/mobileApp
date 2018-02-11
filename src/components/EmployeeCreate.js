import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions';

class EmployeeCreate extends Component {
    buttonSavePress(){
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || '1'});
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Gilbert"
                        onChangeText={text => this.props.employeeUpdate({prop: 'name', value:text})}
                        value ={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="0162209385"
                        //step0: invokve the event
                        //if use value, since is same we can just use the word value es6 shorthand
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                        //step3: update the value which is retrieve from reducer store
                        value ={this.props.phone}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerStyle}>Shift</Text>
                    <Picker style={{flex:1}} selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}>
                        <Picker.Item label="Monday" value ="1"/>
                        <Picker.Item label="Tuesday" value ="2"/>
                        <Picker.Item label="Wednesday" value ="3"/>
                        <Picker.Item label="Thursday" value ="4"/>
                        <Picker.Item label="Friday" value ="5"/>
                        <Picker.Item label="Saturday" value ="6"/>
                        <Picker.Item label="Sunday" value ="7"/>
                    </Picker>
                </CardSection>
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