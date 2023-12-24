
import { createContext , useState , useEffect} from "react";
import axios from "axios";

export const UserContext = createContext();



const DataContext = ({children}) =>{
const [user, setuser] = useState([]);
const url = " http://localhost:8000/user"


useEffect(()=>{
    const dataaxios = async ()=>{
        const response =await axios.get(url)
        setuser(response.data)
    }
    dataaxios()
},[user])
    return (
        <UserContext.Provider value={{
            user , url, setuser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default DataContext;