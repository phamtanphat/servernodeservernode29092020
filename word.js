const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://phat:2db2hIizi9gzhns0@cluster0.irdtc.mongodb.net/databaseword2909?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
