import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Tag } from "src/tags/tag.entity";

export class createTags1574798195375 implements MigrationInterface {
    private tagRepository = getRepository(Tag);
    public async up(queryRunner: QueryRunner): Promise<any> {
        let tags: string[] = [
            'Vue Js',
            'Spring Boot',
            'Node Js',
            'Joomla',
            'Bootstrap',
            'Gsap',
            'HTML 5',
            'CSS 3',
            'JQuery',
            'Animate.css',
            'React Js',
            'Quasar framework',
            'VuetifyJs',
            'Material Design',
            'JSF',
            'SQL Server',
            'Mongo DB',
            'SQl Lite',
            'Asp.Net',
            'Hibernate',
            'JPA',
            'Typescript',
            'ES6',
            'MySql',
            'EntityFramework',
            'Docker'
        ]
        try {
            this.createTag(tags);
        } catch (error) {
            throw error;
        }

    }
    createTag(tags: string[]): void {
        tags.forEach(async (tagName: string) => {
            let tag = new Tag();
            tag.createdAt = tag.updatedAt = new Date();
            tag.name = tagName;
            await this.tagRepository.save(tag);
        })
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }


}
