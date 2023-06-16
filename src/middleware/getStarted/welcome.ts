import { Request, Response } from 'express';

/**
 * Handles the login process for users.
 * @param req - Express request object
 * @param res - Express response object
 * @returns {Promise<Response>} - Express response object
 */
export async function welcome(
  _: Request,
  res: Response
): Promise<Response> {
  return res.send('Welcome to Lambda!')
}
