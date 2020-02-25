"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
exports.checkRole = (roles) => {
    return async (req, res, next) => {
        const id = res.locals.jwtPayload.userId;
        const userRepository = typeorm_1.getRepository(User_1.User);
        let user;
        try {
            user = await userRepository.findOneOrFail(id);
        }
        catch (id) {
            res.status(401).send();
        }
        if (roles.indexOf(user.role) > -1)
            next();
        else
            res.status(401).send();
    };
};
//# sourceMappingURL=checkRole.js.map