import React, { useState } from 'react';
import './Header.css';
import './Register.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

function Login() {

    // For Success 
    const notify = () => toast.success("Successfully Registered", {
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
        firstName: "",
        lastName: "",
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
        const { firstName, lastName, email, password } = user;

        try {
            var data = JSON.stringify({
                firstName, lastName, email, password
            });

            var config = {
                method: 'POST',
                url: 'http://localhost:3001/user/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            const response = await axios(config);
            const data1 = response.data;
            console.log(JSON.stringify(response.data));
            notify();
            console.log("Registered successfully");
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
            if (data1.status === 422 || !data) {
                // window.alert("Email exists..");
                notify2("email already exists");
            }
            else if (data1.status === 402 || !data) {
                // window.alert("some field is empty..")
                notify2("some field is empty..");
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

            <span onClick={handleClickOpen} className="create">Create your Account</span>
            <Dialog open={open} onClose={handleClose}
                PaperProps={{
                    style: {

                        border: 'none',
                        overflow: 'hidden',
                        height: '500px',

                    },
                }}
            >


                <div class="container">
                    <div class="screen">
                        <div class="screen__content">
                            <form method="POST" class="register" >
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" name="firstName" class="login__input" placeholder="First Name" value={user.firstName} onChange={handleInputs} />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" name="lastName" class="login__input" placeholder="Last Name" value={user.lastName} onChange={handleInputs} />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-envelope"></i>
                                    <input type="email" name="email" class="login__input" placeholder="Email" value={user.email} onChange={handleInputs} />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input type="password" name="password" class="login__input" placeholder="Password" value={user.password} onChange={handleInputs} />
                                </div>
                                <button class="button login__submit">
                                    <span class="button__text" name="signup" value="register" onClick={PostData}>Sign Up</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>

                            </form>
                            <div class="social">
                                <Button onClick={handleClose} color="primary"

                                >
                                    Close
                                </Button>
                                <Button onClick={handleClose} color="primary" >
                                    Yes
                                </Button>
                            </div>
                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
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
