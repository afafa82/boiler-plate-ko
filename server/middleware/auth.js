const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증 처리를 하는 곳

  // Client 쿠키에서 token을 가져온다.
  let token = req.cookies.x_auth;
  //토큰을 복호화 한후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.toekn = token;
    req.user = user;
    next(); //next를 하지 않으면 auth가 중간에서 갇혀버려 실행이 더이상 안된다.
    //app.get('/api/users/auth', auth, (req,res) 여기서 더이상 실행이 안됨.
  });
  //유저가 있으면 인증 okay

  //유저가 없으면 인증 no!
};

module.exports = { auth };
