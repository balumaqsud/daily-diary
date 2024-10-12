import mongoose from "mongoose";

const diarySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      reqired: true,
    },
    body: {
      type: String,
      reqired: true,
    },
    priority: {
      type: String,
      reqired: true,
    },
    user_email: {
      type: String,
      reqired: true,
    },
  },

  { timestamps: true }
);

const Diary = mongoose.model("Diary", diarySchema);

export default Diary;
