import React from "react";
import KommunicateChat from './chat';
import './app1.css';


function Home(){
    return(
        <div background-color="black" style={{
            backgroundImage: "url('https://nmindiabio.com/images/slide5.jpg')",
            backgroundSize: "cover",
            backgroundPosition:"center",
            height: "100vh"
          }}>
        
        <KommunicateChat/>
        </div>
        
        
    );



}




export default Home;