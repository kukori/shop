import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {

    const [userData, setUserData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword} = userData;

    const handleSubmit = async event => {
        event.preventDefault();

        if( password !== confirmPassword) {
            alert("passwords don't match!");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            setUserData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = event => {
        const {value, name} = event.target;

        setUserData({...userData, [name]: value });
    }

    return (
        <div className="sign-up">
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" label="Display Name" value={displayName} handleChange={handleChange} required/>
                <FormInput name="email" type="email" label="Email" value={email} handleChange={handleChange} required/>
                <FormInput name="password" type="password" label="Password" value={password} handleChange={handleChange} required/>
                <FormInput name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} handleChange={handleChange} required/>
                <CustomButton type="submit">Sign up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;