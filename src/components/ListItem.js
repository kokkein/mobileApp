import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {Actions} from 'react-native-router-flux';
import EmployeeEdit from './EmployeeEdit';

class ListItem extends Component{
    onRowPress(){
        Actions.employeeEdit({selectedEmployee : this.props.employee});
    };

    render(){
        const {name} = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>

        );
    };

};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;
