const express = require("express");
const router = express.Router();
const Hoa = require("../models/Hoa");

router.get("/", async (req, res) => {
  try {
    const hoas = await Hoa.find();
    res.json(hoas);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/loaihoa/:maloai", async (req, res) => {
  try {
    const hoas = await Hoa.find().where("maloai").equals(req.params.maloai);
    res.json(hoas);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.get("/:idmahoa", async (req, res) => {
  try {
    const hoa = await Hoa.findById(req.params.idmahoa);
    console.log(hoa);
    res.json(hoa);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
