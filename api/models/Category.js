const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema({
   name:{
       type:String, 
       required:true,

   },
    timestamps:true
    
   })


exports.Category = mongoose.model('Category' , CategorySchema);

exports.categorySchema = CategorySchema;