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
            <div className="card card-shadow my-4">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <div className="registration-card-img d-md-block d-none">
                            <img src="assets/img/registration.jpg" alt="registration" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-offset-1">
                        <div className="card-body registration-information">
                            <div className="registration-header mb-5">
                                <h3>Create an account</h3>
                                <p>For registration please fillup the required field</p>
                            </div>
                            <form action='' onSubmit={handleSubmit}>
                                <div className="registration-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <label htmlFor="first">Full Name<span>*</span></label>
                                            <input type="text" className="form-control" id="name" autoComplete='off' value={userReg.username} onChange={handleInput} name="username"/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label htmlFor="email ">Email<span>*</span></label>
                                            <input type="email" className="form-control" id="email" autoComplete='off' value={userReg.email} onChange={handleInput} name="email"/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label htmlFor="number">Phone Number<span>*</span></label>
                                            <input type="text" className="form-control" id="phone" autoComplete='off' value={userReg.phone} onChange={handleInput} name="phone"/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label htmlFor="password ">Password<span>*</span></label>
                                            <input type="password" className="form-control" id="password" autoComplete='off' value={userReg.password} onChange={handleInput} name="password"/>
                                        </div>
                                    </div>
                                    <button className="button button-sqr btn-transparent mt-2" type="submit">Registration</button>
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
