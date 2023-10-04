import './app2.css';
import Payment from './Payment';
function Inorganic(){
    return(
        <div className='parent'>
            <div1>
            <h1>Inorganic</h1>
            <img src="https://agribegri.com/admin/images/prod_image/2e9539f339de7ca637a4e6a5ebf6e3e4-06-17-22-10-16-49.png"></img>
            </div1>
            <div2>
                <h2>Greenpeace Neemol Neem Oil</h2>
                <h4>Price : ₹550</h4>
                <li>Inclusive of all taxes Pay online and get Rs. 30 Cash Discount</li>
                <li> Pay 10% advance and get delivery </li>
                <li>Please call us on 986578945 for bulk quantity order</li>
                <br></br>
                <Payment/>
            </div2>
            <div1>
            <img src="https://agribegri.com/admin/images/prod_image/d35aed4ccfb832028ca0eeee1362cf37-01-27-21-16-01-02.JPG"></img>
            </div1>
            <div2>
                <h2>Ecotika 100% Pure Brown Seaweed, Sargassum</h2>
                <h4>Price : ₹838</h4>
                <li>Inclusive of all taxes Pay online and get Rs. 30 Cash Discount</li>
                <li> Pay 10% advance and get delivery </li>
                <li>Please call us on 986578945 for bulk quantity order</li>
                <br></br>
                <Payment/>
            </div2>
        </div >
    )
}
export default Inorganic;