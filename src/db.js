import mongoose from 'mongoose';
const URI = 'mongodb+srv://franco2011:Italia098.@cluster0.bsdrvwv.mongodb.net/companydb?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(err => console.error(err))