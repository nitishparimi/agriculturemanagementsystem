import Payment from "./Payment";
function Organic(){
    return(
        <div>
            <div className='parent'>
            <div1>
            <h1>Organic</h1>
            <img src="https://agribegri.com/admin/images/prod_image/841eb0a75b2c476ad377f7ac4a919a4f-01-07-23-16-08-21.jpg"></img>
            </div1>
            <br></br>
            <div2>
                <h2>Micronutrient Mixture Liquid Fertilizer Faster </h2>
                <h4>Price : ₹1790</h4>
                <li>Inclusive of all taxes Pay online and get Rs. 30 Cash Discount</li>
                <li> Pay 10% advance and get delivery </li>
                <li>Please call us on 986578945 for bulk quantity order</li>
                <br></br>
                <Payment/>
            </div2>
            <br></br>
            <div1>
            <img src="https://agribegri.com/admin/images/prod_image/243a75d61ecdb461d525cea67394369a-02-06-21-14-15-48.jpg"></img>
            </div1>
            <br></br>
            <div2>
                <h2>Aquarius Agro NPK 19:19:19 Water Soluble Fertilizer</h2>
                <h4>Price : ₹1616</h4>
                <li>Inclusive of all taxes Pay online and get Rs. 30 Cash Discount</li>
                <li> Pay 10% advance and get delivery </li>
                <li>Please call us on 986578945 for bulk quantity order</li>
                <br></br>
                <Payment/>
            </div2>
        </div >
        </div>
    )
}
export default Organic;