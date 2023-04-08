const mongoose = require('mongoose')
const NguoidungSchema = mongoose.Schema(
    {
        tennguoidung: {
            type: String,
            require: true
        },
        tendangnhap: {
            type: String,
            require: true
        },
        matkhau: {
            type: String,
            require: true
        },
        sodienthoai: String,
        email: String
    }
)
module.exports = mongoose.model("Nguoidung", NguoidungSchema)