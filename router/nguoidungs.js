const express = require('express')
const router = express.Router()
const Nguoidung = require('../models/Nguoidung')
router.get('/', async (req, res) => {
    try {
        const Nguoidungs = await Nguoidung.find()
        res.json(Nguoidungs)
    } catch (err) {
        res.json({ message: err })
    }
});
router.post("/Login", async (req, res) => {
    try {
        const nd = await Nguoidung.findOne().where('tendangnhap').equals(req.body.tendangnhap).where('matkhau').equals(req.body.matkhau)
        console.log(nd);
        res.json(nd)
    } catch (err) {
        console.log({ message: err });
    }
})
router.post('/', async (req, res) => {
    const nd = new Nguoidung({
        tennguoidung: req.body.tennguoidung,
        tendangnhap: req.body.tendangnhap,
        matkhau: req.body.matkhau,
        sodienthoai: req.body.sodienthoai,
        email: req.body.email
    })
    console.log(nd);
    try {
        const Nguoidungsave = await nd.save()
        res.json(Nguoidungsave)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router