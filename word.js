const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://phat:2db2hIizi9gzhns0@cluster0.irdtc.mongodb.net/databaseword2909?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const Word = mongoose.model('Word', { 
    en: {type : String , trim : true , unique : true , require : true , uppercase : true},
    vn: {type : String , trim : true  , require : true , uppercase : true},
    isMemorized: {type : Boolean , default : false},
});

//SELECT
// Word.find({})
// .then(words => console.log(words))
// .catch(error => console.log(error))

//INSERT
// const word = new Word({en : 'One', vn : 'Mot'})
// word.save()
// .then(word => console.log(word))
// .catch(error => console.log(error))

// UPDATE
// Word.findByIdAndUpdate('5faa879247cc8e0eea4f3c34',{isMemorized : true} , {new : true})
// .then(word => console.log(word))
// .catch(error => console.log(error))

//DELETE
Word.findByIdAndRemove('5faa879247cc8e0eea4f3c34')
.then(word => console.log(word))
.catch(error => console.log(error))

