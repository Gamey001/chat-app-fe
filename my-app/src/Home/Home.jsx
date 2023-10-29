import React from 'react'
import Users from '../Users/Users'

const Home = ({setDisplayProfile}) => {
    const [list, setList] = React.useState()
    const [isListUpdated,setIsListUpdated] = React.useState(false)
    console.log(process.env.REACT_APP_API)
  const fetchData = () => {
    const options = {
      'Access-Control-Allow-Origin': '*'
    }
      fetch(`${process.env.REACT_APP_API}/users`,options)
      .then(res => res.json())
      .then(res => setList(res))
  }
  React.useEffect(() => {
    fetchData()
  },[isListUpdated])
  return (
    <div>
      {<Users setDisplayProfile={setDisplayProfile} setIsListUpdated={()=>{setIsListUpdated(prev=>!prev)}} list={list} />}
    </div>
  )
}

export default Home