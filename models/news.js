const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {type: String, required: [true, 'Podaj tytuł']},
    description: {type: String, required: [true, 'Podaj treść newsa']},
    date: { type: Date, default: Date.now}
})

module.exports = mongoose.model('News', newsSchema);