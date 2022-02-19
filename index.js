const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/UserRoutes');

const app = express();
app.use(express.json());

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://armen:mino199421@comp3123.flrd9.mongodb.net/users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/users',UserRoutes);

app.listen(8081, () => { console.log('Server is running...') });