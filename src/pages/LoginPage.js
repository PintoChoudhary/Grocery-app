import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Endpoints from '../api/Endpoints';

function LoginPage() {
    const navigate = useNavigate();
    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })
    const initialValues = {
        email: '',
        password: ''
    }
    const onSubmit = (values) => {
        axios.post(Endpoints.LOGIN_URL, values)
            .then((response) => {
                    setRequestResponse({
                        textMessage: 'login successfull',
                        alertClass: 'alert alert-success'
                    });
                    localStorage.setItem('token' , response.data.token )
                    localStorage.setItem('user' , JSON.stringify(response.data.token))
                    navigate('/');

            }, (error) => {
                setRequestResponse({
                    textMessage: error.response.data.message,
                    alertClass: 'alert alert-danger'
                })

            })
            .catch(error => { console.log(error); })
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Enter a valid email'),
        password: Yup.string().required('Password is required').min(6, 'Must be atleast 6 characters')
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div className={requestResponse.alertClass} role="alert">
                            {requestResponse.textMessage}
                        </div>
                        <h2>Login</h2>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount
                        >
                            {
                                (formik) => {
                                    return (
                                        <Form >
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <Field type="text" name="email" id="email" className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} />
                                                <ErrorMessage name='email'>
                                                    {
                                                        (errorMessage) => (
                                                            <small className='text-danger'> {errorMessage}</small>
                                                        )
                                                    }
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Password</label>
                                                <Field type="password" name="password" id="password" className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} />
                                                <ErrorMessage name='password'>
                                                    {
                                                        (errorMessage) => (
                                                            <small className='text-danger'> {errorMessage}</small>
                                                        )
                                                    }
                                                </ErrorMessage>
                                            </div>
                                            <Field type="submit" name='login' id='login' value="Login" className="btn btn-primary btn-block" disabled={!formik.isValid} />
                                        </Form>
                                    )
                                }
                            }
                        </Formik>

                        <br />
                        <p className="text-center">
                            New User? <Link to="/register">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default LoginPage
