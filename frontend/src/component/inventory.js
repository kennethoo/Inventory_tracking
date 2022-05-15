
import Item from "./item"
import { AiFillSetting } from "react-icons/ai";
function Inventory({inventory,openInventory,getInventory,editInventory}){
    return(
        <div className="inventoryBox">
          <div className="box-titler">
      <p className="rodu-namee">Inventory</p>
    </div>
            <div className="wraper-container">
            <button onClick={openInventory} className="add-button">Add Inventory</button>
            <div className="wraoer-div">
            <div className="div-box-wraorr title">
                    <div className="box-rrr">Date</div>
                    <div className="box-rrr">Product Name</div>
                    <div className="box-rrr">Category</div>
                    <div className="box-rrr">Ventor</div>
                    <div className="box-rrr">Warehouse</div>
                    <div className="box-rrr">Price</div>
                    <div className="box-rr"><AiFillSetting/></div>
                </div>
                {inventory.map((item,index)=>{
                    return (
                   <Item editInventory={editInventory} getInventory={getInventory}  key={item._id} data={item}/>
                    )
                })}
               
               
            </div>
                
            </div>
        </div>
    )
} 
export default Inventory