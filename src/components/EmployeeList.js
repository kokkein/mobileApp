import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';


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
    renderRow(employee){
        console.log('Hi');
        console.log(employee);
        return <ListItem employee={employee}/>;
    };

    render() {
        console.log(this.props);
        return (
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}/>

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
