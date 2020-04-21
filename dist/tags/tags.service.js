"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tag_entity_1 = require("./tag.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const TagNotFoundException_exception_1 = require("./exceptions/TagNotFoundException.exception");
let TagsService = class TagsService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async getAllTags() {
        try {
            let tags = await this.tagRepository
                .createQueryBuilder('tag')
                .loadRelationCountAndMap('tag.projects', 'tag.projects')
                .getMany();
            return tags;
        }
        catch (error) {
            throw new TagNotFoundException_exception_1.TagNotFoundException(error.toString(), 500);
        }
    }
    async saveTag(tag) {
        try {
            return await this.tagRepository.save(tag);
        }
        catch (error) {
            throw new TagNotFoundException_exception_1.TagNotFoundException('Tag not saved', 500);
        }
    }
    async deleteTag(tagId) {
        try {
            return await this.tagRepository.delete(tagId);
        }
        catch (error) {
            throw new TagNotFoundException_exception_1.TagNotFoundException("Can't delete tag", 500);
        }
    }
};
TagsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map