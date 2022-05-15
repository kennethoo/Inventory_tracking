
import Option from "../component/option"
import {useState} from "react"
import WarehouseName from "./wharehouseName"
const moment = require("moment")

function Item({data,getInventory,editInventory}){
  const [open,setOpen]= useState(false)
  function changeState(data){
    setOpen(data)
  }
    return(
        <div className="div-box-wraorr">
          <div className="box-rrr">{moment(data.date).format('L') }</div>
        <div className="box-rrr">{data.productName}</div>
        <div className="box-rrr">{data.category}</div>
        <div className="box-rrr">{data.ventor}</div>
        <div className="box-rrr"><WarehouseName id={data.warehouseId}/></div>
        <div className="box-rrr">{data.price}</div>
      <div  className="box-rr"> <Option editInventory={editInventory} id={data._id} getInventory={getInventory} setOpen={changeState} open={open}/></div>
    </div>  
    )
}
export default Item