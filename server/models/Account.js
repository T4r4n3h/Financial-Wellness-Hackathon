const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    account: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    user: { 
      type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Account", accountSchema);
