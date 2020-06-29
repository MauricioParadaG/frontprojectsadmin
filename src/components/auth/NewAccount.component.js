import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewAccountComponent = () => {

    const [createAccountForm, setCreateAccountFormState] = useState(
        {
           name:'',
           email:'',
           password:'',
           confirm:''
        }
      );

    const onChangeAccount = event => {
        setCreateAccountFormState({
            ...createAccountForm,
            // adding an ID - uuid library
            //id: uuid(),
            // adding the form info to the state
            [event.target.name]: event.target.value
        });
    }  

    const onSubmit = event => {
        event.preventDefault();
    }

    return (
    <div className="form-user">
        <div className="container-form shadow-dark">
            <h1>Create New Account</h1>

            <form onSubmit={onSubmit}>

                <div className="field-form">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={createAccountForm.name}
                    onChange={onChangeAccount}
                    />
                </div>

                <div className="field-form">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={createAccountForm.email}
                    onChange={onChangeAccount}
                    />
                </div>

                <div className="field-form">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    id="password"
                    name="password"
                    placeholder="*******"
                    value={createAccountForm.password}
                    onChange={onChangeAccount}
                    />
                </div>

                <div className="field-form">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password"
                    id="confirm"
                    name="confirm"
                    placeholder="*******"
                    value={createAccountForm.confirm}
                    onChange={onChangeAccount}
                    />
                </div>

                {/** Button */}
                <div className="field-form">
                    <input type="submit"
                    className="btn btn-primary btn-block"
                    value="Create Account"
                    />
                </div>

            </form>

            <Link to={"/"} className="link-account">
                Back to Login
            </Link>
        </div>
    </div>
    )
}

export default NewAccountComponent;
