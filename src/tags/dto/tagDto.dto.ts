import { Tag } from "../tag.entity";
export class TagDto extends Tag {
    image: string = `${super.hashtag} merzaq`;
    constructor(tag: Tag) {
        super();
        this.id = tag.id;
        this.name = tag.name;
        this.link = tag.link;
        this.description = tag.description;
        this.hashtag = tag.hashtag;
        this.textColor = tag.textColor;
        this.backgroundColor = tag.backgroundColor;
        this.createdAt = tag.createdAt;
        this.updatedAt = tag.updatedAt;
        this.image = `/resources/tags/${tag.hashtag}.png`;
    };
}
