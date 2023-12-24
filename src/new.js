import { useState, useContext  } from "react"
import {UserContext} from "./component"
import axios from "axios";


const New = ()=> {
    
    const [Nuser , setUser] = useState("");
    const [des , setDes ] = useState("");
    const {user} = useContext(UserContext);
    const {url } = useContext(UserContext);
    const {setuser} = useContext(UserContext);
    const handelnew = async () => {
        const  Nweid = user.length ? user[user.length -1 ].id + 1 : 1;
        if(Nuser.length > 4 && des.length> 10 ){
            const  Newuser = { id : Nweid , name : Nuser , text :des }
            const response  = axios.post(url,Newuser);
            setuser(response.data)
            setDes("");
            setUser("")
        }else{
            return 
        }
       
    }

    return (
        <div className="new">
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className="element">
                    <label htmlFor="name"> Name :</label>
                    <input 
                        value={Nuser}
                        type="text" 
                        name="name"
                        placeholder=" user name " 
                        onChange={(e)=> setUser(e.target.value)} />
                </div>
                <div className="element">
                    <label htmlFor="text"> descption :</label>
                    <textarea 
                    value={des}
                    name="text" 
                    rows="7" 
                    placeholder="descibe your self"
                    onChange={ (e)=> setDes(e.target.value)}></textarea>
                </div>
                <input 
                    type="submit"
                    value="new user"
                    onClick={handelnew} />
            </form>
        </div>
        )
}

export default New