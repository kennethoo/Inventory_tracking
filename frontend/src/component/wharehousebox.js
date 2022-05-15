
import Option from "../component/warehouseOption"
import {useState} from "react"
const moment = require("moment")

function Wharehousebox({data,getwarehouse}){
  const [open,setOpen]= useState(false)
  function changeState(data){
    setOpen(data)
  }
    return(
        <div className="div-box-wraorr">
         <div className="box-rrr">{moment(data.date).format('L') }</div>
        <div className="box-rrr">{data.warehouseName}</div>
        <div className="box-rrr">{data.InventorySize}</div>
      <div  className="box-rr"><Option id={data._id} getInventory={getwarehouse} setOpen={changeState} open={open}/></div>
    </div>  
    )
}
export default Wharehousebox