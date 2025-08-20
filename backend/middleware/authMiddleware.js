const jwt = require('jsonwebtoken');

module.exports = function(requiredRoles = []) {
  return (req,res,next) => {
    const auth = req.headers.authorization;
    if(!auth) return res.status(401).json({ msg: 'No token' });
    try{
      const token = auth.split(' ')[1];
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      if(requiredRoles.length && !requiredRoles.includes(payload.role)) {
        return res.status(403).json({ msg: 'Forbidden' });
      }
      next();
    }catch(err){ res.status(401).json({ msg: 'Invalid token', error: err.message }); }
  };
}
