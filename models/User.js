const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true,
        unique:1
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    // 관리자 또는 일반유저를 구분짓기 위해 role을 넣어줌.
    // 예를 들어 type이 0이면 일반유저 1이면 관리자 이런식으로.
    image: String,
    token: {
        type: String
    },
    // 유효성을 보기 위해 token 이용
    tokenExp:{
        type: Number
    }
    //토큰의 유효기간을 넣어줌.
})

const User = mongoose.model('User', userSchema)

module.exports = {User}