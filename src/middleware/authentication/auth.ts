import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export type User = {
  id: string;
  email: string;
  username: string;
  password?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  phone_number?: string | null;
  verified: boolean;
  is_admin: boolean;
  social: any;
  bio?: string | null;
  profile_image?: string | null;
  banner_image?: string | null;
  created_at: Date;
  updated_at: Date;
};

/**
 * Middleware that checks for a JWT token in the 'x-auth-token' or 'Authorization' header,
 * verifies it, and sets the decoded user object on the request if successful.
 * If verification fails or there is no token, a 401 Unauthorized response is sent.
 * @function auth
 * @param {Request} req - The express request object with an optional user property.
 * @param {Response} res - The express response object.
 * @param {NextFunction} next - The express next function.
 * @returns {void} This function does not return anything. It either calls next() or sends a response.
 */
export const auth = (req: Request, res: Response, next: NextFunction): void => {
  let token = req.header('x-auth-token') || req.header('Authorization');
  if (!token) {
    res.status(401).send({ message: 'Unauthorized' });
    return;
  }

  if (token.startsWith('Bearer ')) {
    token = token.replace('Bearer ', '');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded as User;
    next();
  } catch (error) {
    console.error(`Error verifying a user token. error=${error}`);
    res.status(401).send({ message: 'Unauthorized' });
  }
};
