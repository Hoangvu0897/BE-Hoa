const mongoose = require("mongoose");
const LoaihoaSchema = mongoose.Schema({
  maloai: {
    type: Number,
    required: true,
  },
  tenloai: {
    type: String,
  },
});
module.exports = mongoose.model("Loaihoa", LoaihoaSchema);
