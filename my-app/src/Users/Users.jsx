import React from 'react'
import User from '../User/User'
import { useNavigate } from 'react-router-dom'

const Users = ({ setDisplayProfile, list, setIsListUpdated }) => {
    const navigate = useNavigate()
    return (
            <section className="bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div style={{flexBasis: "40rem"}} className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card">
                                    <div className="card-body p-5">
                                    <header><h1>Springboot Chat App </h1></header>
                                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                            {list?.map((item, idx) => <User setDisplayProfile={setDisplayProfile} setIsListUpdated={setIsListUpdated} key={idx} user={item} />)}
                                        </ul>
                                        <div className='d-flex justify-content-center'>
                                            <button onClick={() => navigate('/register')} type="button"
                                                className="btn btn-outline-danger btn-block btn-lg gradient-custom-4 mx-2"><i className="fa fa-user-plus" aria-hidden="true"></i><span className='pl-2'>Add Friend</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Users