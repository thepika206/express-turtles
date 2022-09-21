import mongoose from "mongoose";

const Schema = mongoose.Schema

const turtleSchema = new Schema({
  name: String, color: String, specialty: String,
})

//Complie schema into a model and export

const Turtle = mongoose.model('Turtle', turtleSchema)

export {
  Turtle
}