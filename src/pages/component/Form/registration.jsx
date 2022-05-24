import React, { useState } from 'react'

const Registration = () => {

    
    const [userReg, setUserReg] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""

    });

    // store record
    const [records, setRecords] = useState([])

    // show value
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(name, value)

        setUserReg({...userReg, [name] : value})
    }

    // store record
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...userReg, id: new Date().getTime().toString()}
        console.log(newRecord);
        setRecords([...records, newRecord]);

        // clear old data from input
        setUserReg({username:"", email: "", phone:"", password:""})
    }

  return (
    <section className="registration-page py-3 py-md-0">
        <div className="container">
            <h3 className="register-head">Register</h3>
            <div className="card registration-card my-4">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="registration-card-img">
                            <img src="assets/img/registration2.jpg" alt="registration"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-offset-1">
                        <h3 className="register-head d-lg-none ">Register</h3>
                        <div className="card-body registration-information">
                            <div className="registration-card-description">
                                <p>For registration please fillup the required field</p>
                            </div>
                            <form action='' onSubmit={handleSubmit}>
                                <div className="social-login">
                                    <button className="btn facebook-btn social-btn mr-2" type="button"><span><i className="fa fa-facebook"></i> Sign in with Facebook</span> </button>
                                    <button className="btn google-btn social-btn" type="button"><span><i className="fa fa-google"></i> Sign in with Google</span> </button>
                                </div>
                                <p className='text-center'> OR </p>
                                <div className="registration-page-registration-form">
                                    <div className="form-group">
                                        <label htmlFor="first">Full Name<span>*</span></label>
                                        <input type="text" className="form-control" id="name" autoComplete='off' value={userReg.username} onChange={handleInput} name="username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email ">Email<span>*</span></label>
                                        <input type="email" className="form-control" id="email" autoComplete='off' value={userReg.email} onChange={handleInput} name="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Phone Number<span>*</span></label>
                                        <input type="text" className="form-control" id="phone" autoComplete='off' value={userReg.phone} onChange={handleInput} name="phone"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password ">Password<span>*</span></label>
                                        <input type="password" className="form-control" id="password" autoComplete='off' value={userReg.password} onChange={handleInput} name="password"/>
                                    </div>
                                    <button className="button button-sqr btn-transparent" type="submit">Registration</button>
                                </div>
                            </form>

                            {/* <div className='mt-5'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Password</th>
                                        </tr>
                                    </thead>
                                    {
                                        records.map((currentElem) => {
                                            return(
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{currentElem.username}</th>
                                                        <td>{currentElem.email}</td>
                                                        <td>{currentElem.phone}</td>
                                                        <td>{currentElem.password}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                </table>
                            </div> */}

                            <div className='mt-4'>
                                <h5>Already have an account? <a href="/login">SignIn</a></h5>
                            </div>
                            <div className="terms-text text-center">
                                <a href="/terms">Terms & Privacy policy.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Registration;
