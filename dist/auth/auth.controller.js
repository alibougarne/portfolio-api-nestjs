"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const User_1 = require("../entity/User");
const config_1 = require("../config/config");
let AuthController = class AuthController {
};
AuthController.login = async (req, res) => {
    let { username, password } = req.body;
    console.log("req.body 💩💩 ", req.body);
    if (!(username && password)) {
        res.status(400).send();
    }
    const userRepository = typeorm_1.getRepository(User_1.User);
    let user = new User_1.User;
    try {
        user = await userRepository.findOneOrFail({ where: { username } });
    }
    catch (error) {
        res.status(401).send();
    }
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).send();
        return;
    }
    const token = jwt.sign({ userId: user.id, username: user.username, dateCreation: new Date() }, config_1.default.jwtSecret, { expiresIn: "1h" });
    res.send(token);
};
AuthController.changePassword = async (req, res) => {
    const id = res.locals.jwtPayload.userId;
    const { oldPassword, newPassword } = req.body;
    console.log("req.body for changing password 💩💩 ", req.body);
    if (!(oldPassword && newPassword)) {
        res.status(400).send();
    }
    const userRepository = typeorm_1.getRepository(User_1.User);
    let user;
    try {
        user = await userRepository.findOneOrFail(id);
    }
    catch (id) {
        res.status(401).send();
    }
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
        res.status(401).send();
        return;
    }
    user.password = newPassword;
    const errors = await class_validator_1.validate(user);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }
    user.hashPassword();
    userRepository.save(user);
    res.status(204).send();
};
AuthController = __decorate([
    common_1.Controller('login')
], AuthController);
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map