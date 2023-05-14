const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.DB;
const Inventory = require("./models/inventory");
const Warehouse = require("./models/warehouse");
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
let PORT = process.env.PORT || 4000;

app.post("/newinventoty", (req, res) => {
  Inventory.create(req.body)
    .then((result) => {
      Warehouse.findOneAndUpdate(
        { _id: req.body.warehouseId },
        { $push: { inventoryList: result._id }, $inc: { InventorySize: +1 } }
      )
        .then((result) => {
          res.send({ succes: true });
        })
        .catch((err) => {
          res.send({ succes: false, payload: "something went wrong" });
        });
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});
app.post("/removeinventory", (req, res) => {
  Inventory.deleteOne({ _id: req.body.id })
    .then((result) => {
      res.send({ succes: true });
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});
app.get("/inventoty/:id", (req, res) => {
  Inventory.find()
    .sort({ _id: -1 })
    .limit(parseInt(req.params.id))
    .then((inventory) => {
      res.send(inventory);
    })
    .catch((err) => {
      res.send({ succes: false });
    });
});
app.post("/updateinventory", (req, res) => {
  Inventory.findOneAndUpdate(
    { _id: req.body.id },
    {
      productName: req.body.productName,
      ventor: req.body.ventor,
      category: req.body.category,
      price: req.body.price,
    }
  )
    .then((result) => {
      res.send({ succes: true });
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});

// Rest endpoint for creating warehouse
app.post("/newwarehouse", (req, res) => {
  Warehouse.create(req.body)
    .then((result) => {
      res.send({ succes: true });
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});

app.post("/upateInventory", (req, res) => {
  Warehouse.findOneAndUpdate(
    { _id: req.body.warehouseId },
    {
      $push: { inventoryList: req.body.inventoryId },
      $inc: { InventorySize: +1 },
    }
  )
    .then((result) => {
      res.send({ succes: true });
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});

app.post("/removeinventory-warehouse", (req, res) => {
  Warehouse.findOneAndUpdate(
    { _id: req.body.id },
    {
      $pull: { inventoryList: req.body.inventoryId },
      $inc: { InventorySize: -1 },
    }
  )
    .then((result) => {
      res.send({ succes: true });
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});
app.get("/load-warehouse/:id", (req, res) => {
  Warehouse.find()
    .sort({ _id: -1 })
    .limit(parseInt(req.params.id))
    .then((Warehouse) => {
      res.send(Warehouse);
    })
    .catch((err) => {
      res.send({ succes: false });
    });
});

app.post("/removeWarehouse", (req, res) => {
  Warehouse.deleteOne({ _id: req.body.id })
    .then((result) => {
      res.send({ succes: true });
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});

app.get("/warehouseName/:id", (req, res) => {
  Warehouse.findOne({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ succes: false, payload: "something went wrong" });
    });
});
app.listen(PORT);
