import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';
import { cookie } from 'express/lib/response';

export const requireAuth = (req, res, next) =>{
  //console.log(req.headers);
  const { token } = req.cookies;
  console.log(cookies);
}