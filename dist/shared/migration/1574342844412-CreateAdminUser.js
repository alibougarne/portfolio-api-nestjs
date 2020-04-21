"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../../users/users.entity");
class CreateAdminUser1574342844412 {
    async up(queryRunner) {
        let user = new users_entity_1.User();
        user.username = "admin";
        user.email = "admin@gmail.com";
        user.password = "admin";
        user.hashPassword();
        user.role = "ADMIN";
        const userRepository = typeorm_1.getRepository(users_entity_1.User);
        await userRepository.save(user);
    }
    async down(queryRunner) {
    }
}
exports.CreateAdminUser1574342844412 = CreateAdminUser1574342844412;
//# sourceMappingURL=1574342844412-CreateAdminUser.js.map