import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from "../../users/users.entity";

export class CreateAdminUser1574342844412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.username = "admin";
        user.email = "admin@gmail.com"
        user.password = "admin";
        user.hashPassword();
        user.role = "ADMIN";
        const userRepository = getRepository(User);
        await userRepository.save(user);
      }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }
    
}
