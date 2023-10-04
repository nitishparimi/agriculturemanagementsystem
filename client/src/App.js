import logo from './logo.png';
import logo1 from './logo1.png';
import logo2 from './logo2.jpeg';
import logo5 from './logo5.jpg';
import logo3 from './logo3.png';
import Login from "./components/Login";
import  About  from "./components/About";
import  Contact  from "./components/Contact"
import  Fertilizers  from "./components/Fertilizers";
import  Navigation  from "./components/Navigation";
import Registraion from "./components/Registration";
import Landing from "./components/Landing";
import Home from './components/Home';
import {MDBContainer} from 'mdb-react-ui-kit';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import './App.css';
import app2 from './components/app2';
import  Products  from "./components/Products";
import  Inorganic  from "./components/Inorganic";
import  Organic  from "./components/Organic";
import Payment from './components/Payment';

function App() {
  return (
    <div>
      <Navigation/>
        
      
     <div>
          <MDBContainer>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/reg" element={<Registraion />}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Con" element={<Contact/>}/>
                <Route path="/Land" element={<Landing/>}/>
                <Route path="/fert" element={<Fertilizers/>}/>
                <Route path="/Prod" element={<Products/>}/>
                <Route path="/Inorg" element={<Inorganic/>}/>
                <Route path="/Org" element={<Organic/>}/>
                <Route path="/Pay" element={<Payment/>}/>

              </Routes>
              </BrowserRouter>
           </MDBContainer>
    </div>
    </div>


     

  );
}

export default App; 
