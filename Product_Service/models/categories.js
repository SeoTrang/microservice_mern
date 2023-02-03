const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const categories = new Schema({
    name            :{type:String,require:true},
    img             :{type:String},
    count           :Number,
    slug            :{ type: String, slug: 'name' , unique:true } // nó sẽ tự động xóa dấu đi và dấu cách sẽ chuyển thành gạch ngang
    //còn unique : để quản lí các trường slug sẽ không bao giờ trùng nhau . nếu người dùng nhập tên trùng nhau thì thuộc tính này sẽ có tác dụng thêm kí tự
    // vào đằng sau slug để cho k bị trùng nhau
})


module.exports = mongoose.model('categories',categories);