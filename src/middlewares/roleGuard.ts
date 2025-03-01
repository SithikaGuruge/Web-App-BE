import { NextFunction, Response } from "express";
import { TRoles } from "../types/authTypes";
import IRequestWithUser from "../interfaces/requestWithUser.interface";

const rolesGuard = (roles: TRoles) => {
  return (req: IRequestWithUser, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      console.log(req.user.role);
      return res.status(401).json({ message: "Access denied1234" });
    }
    next();
  };
};

export default rolesGuard;
