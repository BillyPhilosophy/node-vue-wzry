const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
	name: {
		type: String
	},
	parent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category' //这里表示parent的ObjectId关联的是哪个模型
	}
})

module.exports = mongoose.model('Category', schema)