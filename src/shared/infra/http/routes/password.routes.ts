import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

const passwordRouter = Router();

const sendForgotPasswordMailMailController =
  new SendForgotPasswordMailController();

const resetPasswordController = new ResetPasswordUserController();

passwordRouter.post("/forgot", sendForgotPasswordMailMailController.handle);
passwordRouter.post("/reset", resetPasswordController.handle);
export { passwordRouter };
