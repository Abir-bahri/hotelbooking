


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return  res.status(400).json({msg:"You are not authenticated"})
      
    }
};


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.status(400).json({msg: "You are not authorized!"});
      }
    });
  };


  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return  res.status(400).json({msg: "You are not authorized!"});
      }
    });
  };