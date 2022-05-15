import {useState} from "react"
import { IoCloseSharp } from "react-icons/io5";
const moment = require("moment")
const axios = require("axios")
function AddWarehouse({getInventory,setAddBox,getwarehouse}){
    const [productName,setProductName]=useState("")
function addName(e){
    setProductName(e.target.value) 
}


function addItem(){
    let warehouse={
    warehouseName:productName,
    InventorySize:0,
    date:moment().format(),
    inventoryList:[]
    }
    axios.post("http://localhost:4000/newwarehouse",warehouse).then((result)=>{
        getwarehouse()
        setAddBox(false)
    })

}
    return (
        <div className="add-iventory">
        <div className="form-wraper">
        <div className="box-wrapet-title">
      <p>Add Warehouse</p>
      <button  onClick={()=>{setAddBox(false)}}   className="close-that"><IoCloseSharp/></button>
        </div>
        <div className="edit-box-profile">
				<p>Warehouse Name</p>
          <input placeholder={"Product Name"} onChange={addName}  value={productName}  className="fullname-profile" type="text"  />
				</div>
                <button onClick={addItem} className="add-program">Add</button>
        </div>
	
        </div>
    )
}
export default AddWarehouse