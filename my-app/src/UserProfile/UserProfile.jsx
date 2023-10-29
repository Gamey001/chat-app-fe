import React from 'react'
import { useNavigate } from 'react-router-dom'
const UserProfile = ({ displayProfile, setDisplayProfile }) => {
    const navigate = useNavigate()

    if (!displayProfile) return <></>
    const { id, username, name, email } = displayProfile
    return (
        <div>
            <div style={{ background: 'rgba(0,0,0,.8)', position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh' }}></div>
            <div className='profile-details d-flex'>
                <div className="box">
                    <div id="overlay">
                        <div className="image" style={{ background: `url('https://robohash.org/${id}&200x200') center center no-repeat` }}>
                            <div className="trick">

                            </div>
                        </div>
                        <div className='p-2'><h2 className="text badge badge-secondary mb-2">{username}</h2>
                        </div>
                        <div className="text1 mb-3"><h3>{name}</h3></div>
                        <div className="text1 mb-3"><p>{email}</p></div>
                        <div>
                            <button onClick={() => {
                                setDisplayProfile()
                                navigate(`/conversation/${id}`)
                            }} type="button" className="btn btn-danger mx-1 btn-block"><i className="fa fa-comments-o" aria-hidden="true"></i>
                                <span className='ml-1'>Direct Message</span>
                            </button></div>
                    </div>
                </div>
                <button className='position-abosule align-self-start rounded rounded-circle' onClick={setDisplayProfile}><i className="fa fa-times-circle fa-3x"
                    aria-hidden="true"></i></button>
            </div>
        </div>

    )
}

export default UserProfile