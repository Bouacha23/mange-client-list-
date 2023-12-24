
import Main from "./main";
import DataContext from "./component";
import {Route , Routes} from 'react-router-dom';
import Navbar from "./navbar";
import Footer from "./footer";
import New from "./new";
import About from "./About";
import El from "./Element"

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <DataContext>
        <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/New" element={<New/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/El/:id" element={<El/>}></Route>

        </Routes>
        

      </DataContext>
      <Footer/>
    </div>
  )
}

export default App;

