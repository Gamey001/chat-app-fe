import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const [newUser, setNewUser] = useState({ username: '', name: '', email: '' })
    const navigate = useNavigate()
    const {id} = useParams();

    const register = (newUser)=>{
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        };
        fetch(`${process.env.REACT_APP_API}/user/${id}`, options)
        .then(res=>res.json())
        // .then(res=>console.log('response: ',res))
    }

    const loadUser = (e) => {
        fetch(`${process.env.REACT_APP_API}/user/${id}`)
        .then(res=>res.json())
        .then(res=>setNewUser(res))
    }

    const onChangeHandler = (e) => {
        setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        register(newUser)
        navigate('/')
    }

    useEffect(()=>loadUser(),[])
    return (
        <section className="bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form onSubmit={onSubmitHandler}>
                                        <div className="form-outline mb-4">
                                            <input onChange={onChangeHandler} type="text" id="form3Example1cg" value={newUser.username} name='username' className="form-control form-control-lg" />
                                            <label className="form-label font-weight-bold" htmlFor="form3Example1cg">Username</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={onChangeHandler} type="text" id="form3Example1cg" name='name' value={newUser.name} className="form-control form-control-lg" />
                                            <label className="form-label font-weight-bold" htmlFor="form3Example1cg">Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={onChangeHandler} type="email" id="form3Example3cg" value={newUser.email} className="form-control form-control-lg" name='email' />
                                            <label className="form-label font-weight-bold" htmlFor="form3Example3cg">Email</label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type='submit'
                                                className="btn btn-info btn-block mx-2">Update</button>
                                            <button onClick={() => navigate('/')} type="button"
                                                className="btn btn-danger btn-block mx-2 mt-0">Back</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link href="#!"
                                            className="fw-bold text-body"><u>Login here</u></Link></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditUser