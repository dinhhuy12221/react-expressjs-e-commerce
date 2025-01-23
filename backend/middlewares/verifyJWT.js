import jwt from 'jsonwebtoken'

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.accessToken || req.headers.AccessToken;

    console.log(authHeader);
    
}