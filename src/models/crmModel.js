import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {type: String, required: "Entrez un prénom"},
    lastName: {type: String, required: "Entrez un nom"},
    email: {type: String},
    company: {type: String},
    phone: {type: Number},
    createdAt: {type: Date, default: Date.now}
});