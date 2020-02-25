"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config_1 = require("../config/config");
exports.checkJwt = (req, res, next) => {
    const token = req.headers["authorization"];
    console.log("req.headers: ", req.headers["authorization"]);
    let jwtPayload;
    try {
        jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        res.status(401).send();
        return;
    }
    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, config_1.default.jwtSecret, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);
    next();
};
//# sourceMappingURL=checkjwt.js.map