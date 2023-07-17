import React, { useState } from 'react';
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Endpoints from '../api/Endpoints';
import {Link} from 'react-router-dom'

function RegisterPage() {
    const [ requestResponse , setRequestResponse] = useState({
        textMessage : '',
        alertClass : ''
    })
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        email: Yup.string().required('Email is required').email('Enter a valid email '),
        mobile: Yup.string().required('Mobile is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be atleast 6 characters')

    })
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            mobile: '',
            password: ''
        },
        onSubmit: (values) => {
            // console.log(values);
            axios.post(Endpoints.REGISTER_URL, values)
                .then((response) => {
                    console.log(response.data);
                    setRequestResponse({
                        textMessage : response.data.message,
                        alertClass : 'alert alert-success'
                    })
                }, (error) => {
                    console.log(error);
                    setRequestResponse({
                        textMessage : error.response.data.message,
                        alertClass : 'alert alert-danger'
                    })
                })
                .catch(error => { console.log(error); })
        },
        validationSchema,
        validateOnMount: true
        // validate: (values) => {
        //     let errors = {}
        //     if (!values.firstName) {
        //         errors.firstName= 'FirstName is required';
        //     }
        //     if (!values.email) {
        //         errors.email= 'Email is required';
        //     }else if (!/^[A-Z0-9._%+-]+ @[A-Z0-9]+\.[A-Z]{2,4}$/i.test(values.firstName )) {
        //         errors.email= 'Enter valid email'
        //     }
        //     if (!values.mobile) {
        //         errors.mobile= 'Mobile is required';
        //     }
        //     if (!values.password) {
        //         errors.password= 'Password is required';
        //     }
        //     return errors
        // }
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
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName"
                                    id="firstName" value={formik.values.firstName}
                                    onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <small className='text-danger'>
                                        {formik.errors.firstName}
                                    </small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.email && formik.errors.email ? (
                                    <small className='text-danger'>
                                        {formik.errors.email}
                                    </small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="text" name="mobile" id="mobile" value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.mobile && formik.errors.mobile ? (
                                    <small className='text-danger'>
                                        {formik.errors.mobile}
                                    </small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.password && formik.errors.password ? (
                                    <small className='text-danger'>
                                        {formik.errors.password}
                                    </small>
                                ) : null}
                            </div>
                            <input type="submit" value="Register" className="btn btn-primary btn-block" disabled={!formik.isValid} />
                        </form>
                        <br />
                        <p className="text-center">
                            Already registered? <Link to="/login">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default RegisterPage
