import React from 'react'
import { useContext } from 'react'
import { UserContext } from './component'
import { Link } from 'react-router-dom'

const Main = () => {
    const {user} = useContext(UserContext);

    return (
        <main className='home'>
            {user.length === 0 ? (<p>is empty</p>) : ( <ul>
                { 
                user.map( (user)=>(
                    <li key={user.id}>
                        <Link to={`/El/${user.id}`}><h3>{user.name}</h3></Link>
                        <p>{(user.text).substring(0, 10)}</p>
                    </li>
                ))
            }`
           </ul>)}
        </main>
    )
}

export default Main