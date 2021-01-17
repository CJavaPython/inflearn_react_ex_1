const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50,
    },
    email:{
        type: String,
        trim: true,
        unique:1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{ 
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp:{
        type:Number
    }
});

userSchema.pre('save', function( next ){
    //비밀번호를 암호화 시킨다

})

const User = mongoose.model('User', userSchema);

module.exports = {User}

//trim : spacebar 자동 관리
//role : 관리자 일반유저
//tokenExp : token유효기간