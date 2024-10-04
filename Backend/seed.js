// backend/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User'); // Adjust the path as needed

dotenv.config();

mongoose.connect(process.env.VITE_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch((err) => console.log(err));

const seedUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    email: 'john@example.com',
    address: '123 Main St, Anytown, USA'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '987-654-3210',
    email: 'jane@example.com',
    address: '456 Elm St, Othertown, USA'
  }
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
};

seedDB().then(() => {
  console.log('Database seeded');
  mongoose.connection.close();
});