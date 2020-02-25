"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entity_1 = require("../tag.entity");
class TagDto extends tag_entity_1.Tag {
    constructor(tag) {
        super();
        this.image = `${super.hashtag} merzaq`;
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
    }
    ;
}
exports.TagDto = TagDto;
//# sourceMappingURL=tagDto.dto.js.map