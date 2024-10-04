// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, 'Please enter a valid phone number (e.g., 123-456-7890)']
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;