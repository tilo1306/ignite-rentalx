import auth from "@config/auth";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UserTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  const userTokensRepository = new UserTokensRepository();

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_Id } = verify(
      token,
      auth.secret_refresh_token
    ) as IPayload;

    const user = userTokensRepository.findByUserIdAndRefreshToken(
      user_Id,
      token
    );

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_Id,
    };
    next();
  } catch (error) {
    throw new AppError("Invalid Token", 401);
  }
}
