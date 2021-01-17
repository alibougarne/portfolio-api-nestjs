import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Tag } from "../../tags/tag.entity";
import tags from './data/tags.json'
interface tagType {
    name: string,
    icon: string,
    hashtag: string,
    link: string,
    description: string,
    textColor: string,
    backgroundColor: string,
    logoPath:string,
}
export class createTags1574798195378 implements MigrationInterface {
    private tagRepository = getRepository(Tag);
    public async up(queryRunner: QueryRunner): Promise<any> {
        try {
            this.createTag(tags);
        } catch (error) {
            console.error('%c⧭', 'color: #bfffc8', error);
        }

    }
    createTag(data: any[]): void {
        console.log('%c⧭', 'color: #0088cc', "======= createTag begin ===== ");
        data.forEach(async (tagName: tagType) => {
            let tag = new Tag();
            tag.name = tagName.name;
            tag.icon = tagName.icon;
            tag.hashtag = tagName.hashtag;
            tag.link = tagName.link;
            tag.description = tagName.description;
            tag.textColor = tagName.textColor;
            tag.backgroundColor = tagName.backgroundColor;
            tag.createdAt = tag.updatedAt = new Date();
            tag.logoPath = tagName.logoPath
            await this.tagRepository.save(tag);
        })
        console.log('%c⧭', 'color: #0088cc', "======= createTag end ===== ");

    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }


}
