import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Tag } from "../../tags/tag.entity";

interface tagType {
    name: string
    hashtag: string,
    link: string,
    description: string,
    textColor: string,
    backgroundColor: string
}
export class createTags1574798195375 implements MigrationInterface {
    private tagRepository = getRepository(Tag);
    public async up(queryRunner: QueryRunner): Promise<any> {
        let tags: tagType[] = [
            {
                name: 'Vue Js',
                hashtag: 'vuejs',
                link: 'https://vuejs.org',
                description: 'Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru',
                textColor: 'fff',
                backgroundColor: '4fc08d'
            },
            {
                name: 'Spring Boot',
                hashtag: 'springboot',
                link: 'https://spring.io/projects/spring-boot',
                description: 'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run"',
                textColor: 'fff',
                backgroundColor: '6db33f'
            },
            {
                name: 'Node Js',
                hashtag: 'nodejs',
                link: 'https://nodejs.org',
                description: 'Node.js® is a JavaScript runtime built on Chrome´s V8 JavaScript engine.',
                textColor: 'fff',
                backgroundColor: '026e00'
            },
            {
                name: 'Nest Js',
                hashtag: 'nestjs',
                link: 'https://nestjs.com',
                description: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications',
                textColor: 'fff',
                backgroundColor: 'e0234e'
            },
            {
                name: 'Joomla',
                hashtag: 'joomla',
                link: 'https://joomla.org',
                description: 'Joomla is a free and open-source content management system for publishing web content, developed by Open Source Matters, Inc. It is built on a model–view–controller web application framework that can be used independently of the CMS',
                textColor: 'fff',
                backgroundColor: '18487a'
            }
        ]
        try {
            this.createTag(tags);
        } catch (error) {
            throw error;
        }

    }
    createTag(tags: any[]): void {
        console.log("shared tags: ",tags)
        tags.forEach(async (tagName: tagType) => {
            let tag = new Tag();
            tag.name = tagName.name;
            tag.hashtag = tagName.hashtag;
            tag.link = tagName.link;
            tag.description = tagName.description;
            tag.textColor = tagName.textColor;
            tag.backgroundColor = tagName.backgroundColor;
            tag.createdAt = tag.updatedAt = new Date();
            await this.tagRepository.save(tag);
        })
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }


}