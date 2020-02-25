import { Request, Response, NextFunction } from "express";
export declare const checkRole: (roles: string[]) => (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response, next: NextFunction) => Promise<void>;
