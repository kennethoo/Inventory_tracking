import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function SelectWarehouse({ getwarehouse, setWarehouse, warehouse }) {
  const [warehouses, setWarehouses] = useState([]);

  function getwarehouse() {
    axios.get(`http://localhost:4000/load-warehouse/${10}`).then((result) => {
      console.log(result);

      setWarehouses(result.data);
    });
  }
  useEffect(() => {
    getwarehouse();
  }, []);

  return (
    <div className="selctef-whare">
      <div className="wahrerrr">Warehouses</div>
      <div className="wtaprttiit">
        {warehouses.map((item) => {
          return (
            <button
              onClick={() => {
                setWarehouse(item._id);
              }}
              key={item._id}
              className={` ${warehouse === item._id ? "active" : ""}`}
            >
              {item.warehouseName}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectWarehouse;
