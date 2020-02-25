import { Request, Response } from "express";
declare class AuthController {
    static login: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<void>;
    static changePassword: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<void>;
}
export default AuthController;
