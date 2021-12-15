import React from "react";
import './App.css';

const LoginForm = ({ isShowLogin }) => {
    return (
        <div className="show">
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="login-text">Login</h1>
                        <label>Username</label><br /><br />
                        <input type="text" name="username" className="login-box" /><br /><br />
                        <label>Password</label><br /><br />
                        <input type="paasword" name="password" className="login-box" /><br /><br />
                        <input type="submit" value="Login" className="login-btn" />
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;