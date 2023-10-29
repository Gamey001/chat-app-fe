import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./user.css"

const User = ({ user, setDisplayProfile, setIsListUpdated }) => {
    const { name, id } = user
    const navigate = useNavigate()

    const deleteUser = (id) => {
        const options = {
            method: 'DELETE'
        }
        fetch(`${process.env.REACT_APP_API}/user/${id}`, options)
            .then(res => {
                setIsListUpdated()
            })
    }
    return (
        <li style={{ padding: '1rem 4%', margin: '2rem 0', textAlign: 'left', border: '2px solid #dc3545', borderRadius: '3rem' }}>
            <div className='d-flex justify-content-between'>
                <div>
                    <div style={{ flex: 1 }} className="avatar mx-auto bg-white border border-danger">
                        <img src={`https://robohash.org/${id}&200x200`} alt='Sser'
                            className="rounded-circle img-fluid" />
                    </div>
                </div>
                <div style={{ flex: 1 }} className='text-align-left pl-3 align-self-center'>
                    <small> <span style={{ fontWeight: '600' }}>{name}</span></small>
                </div>
                <div className='d-flex justify-content-end ' style={{ flex: 1 }}>
                    <button onClick={() => setDisplayProfile(user)} type="button" className="btn btn-outline-info btn-sm mx-1 align-self-center"><i className="fa fa-eye" aria-hidden="true"></i>
                    </button>
                    <button onClick={() => navigate(`/edituser/${id}`)} type="button" className="btn btn-outline-secondary btn-sm mx-1 align-self-center"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>
                    <button onClick={() => deleteUser(id)} type="button" className="btn btn-danger btn-sm mx-1 align-self-center"><i className="fa fa-user-times" aria-hidden="true"></i>
                    </button>

                </div>
            </div>
        </li>
    )
}

export default User