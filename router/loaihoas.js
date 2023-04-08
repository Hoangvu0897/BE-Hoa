const express = require("express");
const router = express.Router();
const Loaihoa = require("../models/Loaihoa");
router.get("/", async (req, res) => {
  try {
    const loaihoas = await Loaihoa.find();
    res.json(loaihoas);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/", async (req, res) => {
  const loaihoa = new Loaihoa({
    maloai: req.body.maloai,
    tenloai: req.body.tenloai,
  });
  try {
    const loaihoasave = await loaihoa.save();
    res.json(loaihoasave);
  } catch (err) {
    res.json({ message: err });
  }
});
router.delete("/:idmaloai", async (req, res) => {
  try {
    const loaihoaxoa = await Loaihoa.deleteOne({ maloai: req.params.idmaloai });
    console.log(loaihoaxoa);
    res.json(loaihoaxoa);
  } catch (err) {
    res.json({ message: err });
  }
});
router.patch("/:idmaloai", async (req, res) => {
  try {
    const loaihoacapnhat = await Loaihoa.updateOne(
      { maloai: req.params.idmaloai },
      { $set: { tenloai: req.body.tenloai } }
    );
    console.log(loaihoacapnhat);
    res.json(loaihoacapnhat);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
