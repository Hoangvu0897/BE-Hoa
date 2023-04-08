const mongoose = require("mongoose");
const LoaihoaSchema = mongoose.Schema({
  mahoa: {
    type: Number,
    required: true,
  },
  maloai: Number,
  tenhoa: String,
  donggia: Number,
  hinh: String,
  mota: String,
});
module.exports = mongoose.model("Hoa", LoaihoaSchema);
