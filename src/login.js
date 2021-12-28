import React, { useState } from 'react';
import './Header.css';
// import './login.css';
import Register from './Register';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';




function Login() {

    // For Success 
    const notify = () => toast.success("Successfully Logged In", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    // For Warning 
    const notify2 = (res) => toast.warn(res, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    // Get user Data 
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        try {
            var data = JSON.stringify({
                email, password
            });

            var config = {
                method: 'POST',
                url: 'http://localhost:3001/user/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            const response = await axios(config);
            const data1 = response.data;
            console.log(JSON.stringify(response.data));
            notify();
            console.log("Logged in successfully");
            setUser({ [name]: "" })
            // navigate('./App.js');
            handleClose();
            // Success 
            console.log(response);
        } catch (error) {
            console.log("error ", error);
            console.log("error response ", error.response);
            console.log("error response  ", error.response.data);
            const data1 = error.response;
            // console.log(JSON.stringify(error.response.data));
            if (data1.status === 400 || !data) {
                // window.alert("Email exists..");
                notify2("email not found");
            }
            else if (data1.status === 402 || !data) {
                // window.alert("some field is empty..")
                notify2("password doesn't match..");
            }

            setUser({ [name]: "" })
            // navigate('./App.js');
            handleClose();
        }

    }



    // Open Registration form onclick event  
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {

        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>

            <span onClick={handleClickOpen} className="loginicon">Login</span>
            <Dialog open={open} onClose={handleClose}
                PaperProps={{
                    style: {

                        border: 'none',
                        overflow: 'hidden',
                        height: '500px',

                    },
                }}
            >


                <div class="container flex items-center justify-center">
                    <div class="screen relative h-100">
                        <div class="screen__content z-1 relative">
                            <form class="login">
                                <div class="login__field">
                                    <i class="login__icon fas fa-envelope"></i>
                                    <input type="email" name="email" class="login__input" placeholder="Email" value={user.email} onChange={handleInputs} />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input type="password" name="password" class="login__input" placeholder="Password" value={user.password} onChange={handleInputs} />
                                </div>
                                <button class="button login__submit">
                                    <span class="button__text" onClick={PostData}>Log In Now</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                            <Register />
                            <div class="social-login">

                                <h3>log in via</h3>
                                <div class="social-icons">
                                    <a href="#" class="social-login__icon fab fa-instagram"></a>
                                    <a href="#" class="social-login__icon fab fa-facebook"></a>
                                    <a href="#" class="social-login__icon fab fa-twitter"></a>
                                </div>
                                <Button onClick={handleClose} color="primary"

                                >
                                    Close
                                </Button>
                                <Button onClick={handleClose} color="primary" >
                                    Yes
                                </Button>
                            </div>
                        </div>
                        <div class="screen__background absolute z-0 inset-0">
                            <span class="screen__background__shape screen__background__shape4 absolute"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>



            </Dialog>
            <ToastContainer />

        </>



    );
}

export default Login;
