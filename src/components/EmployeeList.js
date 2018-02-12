import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';
import _ from 'lodash';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeeFetch();
        //console.log(this.props);
        this.createDatasource(this.props);
    };

    componentWillReceiveProps(nextProps){
        this.createDatasource(nextProps);
        //console.log(this.props);

    };

    createDatasource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    };

    render() {
        console.log(this.props);
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

const mapStateToProps = state => {
    
    const employees = _.map(state.employeeList, (val, uid) => {
        return {...val, uid};
    });
    return {employees};
};

export default connect(mapStateToProps, {employeeFetch}) (EmployeeList);
