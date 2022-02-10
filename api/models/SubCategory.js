const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    categoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category', 
        required:true
    },
    timestamps:true

});
exports.Subcategory = mongoose.model('SubCategory' , SubcategorySchema);
exports.SubcategorySchema = SubcategorySchema;