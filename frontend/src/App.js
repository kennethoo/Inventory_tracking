import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Edit from "./component/edit";
import Nav from "./component/nav";
import Inventory from "./component/inventory";
import Shipemnt from "./component/Shipement";
import AddIntentory from "./component/addInventory";
function App() {
  const [inventory, setInventory] = useState([]);
  const [addInventory, setAddInventory] = useState(false);
  const [shipmetnTab, setshipmetnTab] = useState(false);
  const [curentProduct, setCurrentProduct] = useState({});
  const [editBox, setEditBox] = useState(false);
  function editInventory(id) {
    let item = inventory.find((item) => item._id === id);
    setCurrentProduct(item);
    setEditBox(true);
  }
  function openEdit(data) {
    setEditBox(data);
  }
  function openInventory() {
    setAddInventory(!addInventory);
  }

  function getInventory() {
    axios.get(`http://localhost:4000/inventoty/${10}`).then((result) => {
      setInventory(result.data);
    });
  }
  useEffect(() => {
    getInventory();
  }, []);
  return (
    <div className="App">
      <div className="box-nacnfnfrrr">
        <p className="rodu-name">Shipify</p>
      </div>
      <div className="wraper-app">
        <Nav setshipmetnTab={setshipmetnTab} shipmetnTab={shipmetnTab} />
        <div className="wrapper">
          {shipmetnTab ? (
            <Shipemnt />
          ) : (
            <Inventory
              editInventory={editInventory}
              getInventory={getInventory}
              openInventory={openInventory}
              inventory={inventory}
            />
          )}
        </div>
      </div>

      {editBox ? (
        <Edit
          curentProduct={curentProduct}
          getInventory={getInventory}
          openInventory={openEdit}
        />
      ) : (
        ""
      )}
      {addInventory ? (
        <AddIntentory
          getInventory={getInventory}
          openInventory={openInventory}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
