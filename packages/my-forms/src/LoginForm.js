import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormPanel, TextField, PasswordField, Button, Container } from '@extjs/ext-react';
import renderWhenReady from './renderWhenReady';

Ext.require('Ext.MessageBox');

class LoginForm extends Component {

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number
    };

    login = () => {
        Ext.Msg.alert("Logged In", "You've successfully logged in.");
    }

    render() {
        const { height, width } = this.props;

        return (
            <FormPanel title="Log In" height={height} width={width} shadow>
                <TextField name="username" label="Username"/>
                <PasswordField name="password" label="Password"/>
                <Container docked="bottom" layout={{ type: 'hbox', pack: 'right' }} padding="10">
                    <Button text="Log In" ui="action raised" handler={this.login}/>
                </Container>
            </FormPanel>
        )
    }

}

export default renderWhenReady(LoginForm);