import React, { Component } from 'react';
import { connect} from 'react-redux';
import { emailChanged, passChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {View, Text} from 'react-native'; 

class LoginForm extends Component {
    onMailChange(text){
        //step1: this function will call the reducer action to involke reducer
        this.props.emailChanged(text);
    }
    onPassChange(text){
        this.props.passChanged(text);
    }
    onButtonPress(){
        const { email, password} = this.props;
        this.props.loginUser({ email, password});
    }
    renderButton(){
        if (this.props.loading){
            return <Spinner size="large"/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login...
            </Button>
        );

    }
    renderError() {
        if (this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    
    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@mail.com"
                        onChangeText={this.onMailChange.bind(this)}
                        value ={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        //step0: invokve the event
                        onChangeText={this.onPassChange.bind(this)}
                        //step3: update the value which is retrieve from reducer store
                        value ={this.props.password}
                    />
                </CardSection>
                
                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state =>{
    //step2: this function retrive the value from the reducer store
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, {emailChanged,passChanged,loginUser})(LoginForm);
