import React from "react";
import "./app1.css";
import Inorganic from "./Inorganic";
import Organic from "./Organic";

function Products(){
    const [submitted, setSubmitted] = React.useState(false);

    const handleInorganic = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const [clicked, setClicked] = React.useState(false);

    const handleorganic = (event) => {
        event.preventDefault();
        setClicked(true);
    };



    if(submitted){
        return(
            <div>
                <Inorganic/>
            </div>
        )
    }

    if(clicked){
        return(
            <div>
                <Organic/>
            </div>
        )
    }

    return(
        <div className="center"  background-color="black" style={{
            backgroundImage: "url('https://kj1bcdn.b-cdn.net/media/61923/farming-chemical-fertilizers-500x500.jpg')",
            backgroundSize: "cover",
            backgroundPosition:"center",
            height: "100vh",
          }}>
             <button onClick={handleInorganic} className="button1" type="button">Inorganic Products</button>  <button  onClick={handleorganic} className="button2"  type="button">organic products</button>
          </div>
         
    );

}


export default Products;