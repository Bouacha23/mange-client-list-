import { useParams ,useNavigate  } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from './component'
import axios from "axios"

const El = () => {
    const navigate = useNavigate()
    let {id}= useParams("");
    const {user, setuser} = useContext(UserContext);
    const {url } = useContext(UserContext);
    const element  = user.find((e)=> (e.id).toString() === id )
    const handeldelect =async () => {
        const res = await axios.delete(`${url}/${(element.id).toString()}`)
        navigate('/')
    }

  return (
    <div className="elemet">
        <p>this is my id : {element.id} </p>
        <p>{element.text }</p>
        <button onClick={handeldelect} >Deleter</button>
    </div>
  )
}

export default El