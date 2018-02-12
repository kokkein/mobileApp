import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeeFetch();
    };

    render() {
        return (
            <View>
                <Text>Employee 1</Text>
                <Text>Employee 2</Text>
                <Text>Employee 3</Text>
                <Text>Employee 4</Text>
                <Text>Employee 5</Text>
                <Text>Employee 6</Text>
            </View>
        );
    }
};

export default connect(null,{employeeFetch}) (EmployeeList);
