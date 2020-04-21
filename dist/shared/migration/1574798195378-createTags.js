"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const tag_entity_1 = require("../../tags/tag.entity");
class createTags1574798195378 {
    constructor() {
        this.tagRepository = typeorm_1.getRepository(tag_entity_1.Tag);
    }
    async up(queryRunner) {
        let tags = [
            {
                name: 'Vue Js',
                hashtag: 'vuejs',
                link: 'https://vuejs.org',
                description: 'Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru',
                textColor: '#fff',
                backgroundColor: '#4fc08d',
                logoPath: 'resources/tags/vuejs.png',
            },
            {
                name: 'Spring Boot',
                hashtag: 'springboot',
                link: 'https://spring.io/projects/spring-boot',
                description: 'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run"',
                textColor: '#fff',
                backgroundColor: '#6db33f',
                logoPath: 'resources/tags/springboot.png',
            },
            {
                name: 'Node Js',
                hashtag: 'nodejs',
                link: 'https://nodejs.org',
                description: 'Node.js® is a JavaScript runtime built on Chrome´s V8 JavaScript engine.',
                textColor: '#fff',
                backgroundColor: '#026e00',
                logoPath: 'resources/tags/nodejs.png',
            },
            {
                name: 'Nest Js',
                hashtag: 'nestjs',
                link: 'https://nestjs.com',
                description: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications',
                textColor: '#fff',
                backgroundColor: '#e0234e',
                logoPath: 'resources/tags/nestjs.png',
            },
            {
                name: 'Joomla',
                hashtag: 'joomla',
                link: 'https://joomla.org',
                description: 'Joomla is a free and open-source content management system for publishing web content, developed by Open Source Matters, Inc. It is built on a model–view–controller web application framework that can be used independently of the CMS',
                textColor: '#fff',
                backgroundColor: '#18487a',
                logoPath: 'resources/tags/joomla.png',
            },
            {
                name: 'Photoshop',
                hashtag: 'photoshop',
                link: 'https://www.adobe.com/products/photoshop.html',
                description: 'The world’s best imaging and graphic design software is at the core of just about every creative project, from photo editing and compositing to digital painting, animation, and graphic design. And now you can harness the power of Photoshop across desktop and iPad to create wherever inspiration strikes.',
                textColor: '#fff',
                backgroundColor: '#061d26',
                logoPath: 'https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg',
            }
        ];
        try {
            this.createTag(tags);
        }
        catch (error) {
            throw error;
        }
    }
    createTag(tags) {
        console.log('%c⧭', 'color: #0088cc', "======= createTag begin ===== ");
        tags.forEach(async (tagName) => {
            let tag = new tag_entity_1.Tag();
            tag.name = tagName.name;
            tag.hashtag = tagName.hashtag;
            tag.link = tagName.link;
            tag.description = tagName.description;
            tag.textColor = tagName.textColor;
            tag.backgroundColor = tagName.backgroundColor;
            tag.createdAt = tag.updatedAt = new Date();
            tag.logoPath = tagName.logoPath;
            await this.tagRepository.save(tag);
        });
        console.log('%c⧭', 'color: #0088cc', "======= createTag end ===== ");
    }
    async down(queryRunner) {
    }
}
exports.createTags1574798195378 = createTags1574798195378;
//# sourceMappingURL=1574798195378-createTags.js.map