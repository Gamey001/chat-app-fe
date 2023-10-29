import React, { useEffect, useState } from 'react'
import './chat.css';
import { useNavigate, useParams } from 'react-router-dom';

const Chat = () => {
    const navigate = useNavigate()
    const {receiptId} = useParams()
    const [isUserOffline, setIsUserOffline] = useState(true)
    const [prevSender, setPrevSender] = useState(false)
    const [message, setMessage] = useState({newmessage: '',sender: 1,receipient: receiptId})
    const [messages, setMessages] = useState()
    const onChangeHandler = (e) => {
        setMessage((prev) => ({ ...prev, newmessage: e.target.value }))
    }
    const getChat = ()=>{
        fetch(`${process.env.REACT_APP_API}/messages`)
            .then(res=>res.json())
            .then(res=>{
                setMessages(res)
            })
    }
    const clearChat = ()=>{
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(`${process.env.REACT_APP_API}/messages`, options)
        .then(()=>{setMessages()})
    }
    const sendMessage = (message)=>{
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message),
            };
            fetch(`${process.env.REACT_APP_API}/message`, options)
            .then(res=>res.json())
            .then(res=>{
                setPrevSender(prev=>!prev)
                setMessage(prev=>({...prev, newmessage: '', sender: prevSender? 1 : 0}))
            })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        sendMessage(message)
    }
    useEffect(()=>{
        getChat()
    },[prevSender])
    useEffect(()=>alert('Checkout the available chat feature, full feature coming soon!'),[isUserOffline]
    )
  return (
    <div>
        <div className='text-left'>        <button className='btn btn-outline-info' onClick={()=>navigate(-1)}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
</div>
        <div className="container content">
    <div className="row justify-content-center">
        <div className="col-xl-7 col-md-10 col-sm-12 col-12">
        	<div style={{minHeight: '100vh'}}  className="card">
        		<div className="card-header p-4">Chat to yourself</div>
        		<div className="card-body height3">
                    {<p style={{visibility: message.newmessage? 'visible': 'hidden', fontStyle: 'italic', fontWeight:'bold', textAlign: 'left', transition: 'all .4s'}}>Typing...</p>}
        			<ul className="chat-list">
                        {
                            messages?.map((item)=>!!item.sender?<li key={item.id} className="in">
        					<div className="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar2.png" />
        					</div>
        					<div className="chat-body">
        						<div className="chat-message">
        							<h5>Message</h5>
        							<p>{item.newmessage}</p>
        						</div>
        					</div>
        				</li>:<li key={item.id} className="out">
        					<div className="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png" />
        					</div>
        					<div className="chat-body">
        						<div className="chat-message">
        							<h5>Reply</h5>
        							<p>{item.newmessage}</p>
        						</div>
        					</div>
        				</li>)
                        }
        			</ul>
                    <form onSubmit={onSubmitHandler}>
                    <div className="form-outline">
                  <textarea onChange={onChangeHandler} value={message.newmessage} className="form-control" placeholder='Type here...' id="textAreaExample" rows="4"></textarea>
                </div>
                <div className="d-flex justify-content-between mt-3">
                <button onClick={clearChat} type='button' className="btn btn-danger">
                <i className="fa fa-trash "></i>
                <span> Clear History</span>
                  </button>
                  <button disabled={!message.newmessage} type="submit" className="btn btn-danger">
                  <span>Send </span>
                  <i className="fa fa-paper-plane "></i>
                  </button>
                </div>
                    </form>
        		</div>
        	</div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Chat