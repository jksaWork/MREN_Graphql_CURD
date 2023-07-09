import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  name: String,
  email: String,
  phone: String,
});

export default model("Client", clientSchema);
