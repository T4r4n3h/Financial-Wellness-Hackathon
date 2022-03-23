const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    reward: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false
    },
    user: { 
      type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
