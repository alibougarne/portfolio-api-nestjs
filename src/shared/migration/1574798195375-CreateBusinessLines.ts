import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Tag } from "../../tags/tag.entity";

interface tagType {
    name: string
    hashtag: string,
    link: string,
    description: string,
    textColor: string,
    backgroundColor: string,
    logoPath:string,
}
export class createBusinessLines1574798195375 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
