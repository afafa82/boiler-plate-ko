const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const config = require('./config/key')
const {User} = require("./models/User")

// application/x-www-form-urlencoded 이런 url 로 된 주소를 해석해준다.
// 나중에 입력한 데이터가 올바르게 입력되었을 때 postman에서 extended: true 가 출력된다.
app.use(bodyParser.urlencoded({extended: true}))

// application/json json형식으로 된 내용을 해석해준다.
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(()=>console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World and I am Youngil'))

app.post('/register', (req,res) => {
    // 회원 가입 할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })


})
app.listen(port,() => console.log(`This app is listening on port ${port}`))