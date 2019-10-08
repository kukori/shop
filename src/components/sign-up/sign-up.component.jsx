import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if( password !== confirmPassword) {
            alert("passwords don't match!");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" label="Display Name" value={this.state.displayName} handleChange={this.handleChange} required/>
                    <FormInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required/>
                    <FormInput name="confirmPassword" type="password" label="Confirm Password" value={this.state.confirmPassword} handleChange={this.handleChange} required/>
                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        )
    }
}
