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
const platform_express_1 = require("@nestjs/platform-express");
const tags_service_1 = require("./tags.service");
const multer_1 = require("multer");
const file_upload_utils_1 = require("./utils/file-upload.utils");
let TagsController = class TagsController {
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    async getAllTags() {
        let tags = await this.tagsService.getAllTags();
        return tags;
    }
    async deleteTag(tagId) {
        return await this.tagsService.deleteTag(tagId);
    }
    async createTag(payload, tagImage) {
        const tag = JSON.parse(payload.tag);
        console.log('%c⧭', 'color: #1d5673', tagImage);
        tag.logoPath = tagImage.filename;
        return this.tagsService.saveTag(tag);
    }
    async editTag(payload, tagImage) {
        const tag = JSON.parse(payload.tag);
        console.log('%c⧭', 'color: #1d5673', tagImage);
        tag.logoPath = tagImage.filename;
        return this.tagsService.saveTag(tag);
    }
};
__decorate([
    common_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "getAllTags", null);
__decorate([
    common_1.Delete(':tagId'),
    __param(0, common_1.Param('tagId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "deleteTag", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('tagImage', {
        storage: multer_1.diskStorage({
            destination: './client/resources/tags',
            filename: file_upload_utils_1.editFileName,
        }),
        fileFilter: file_upload_utils_1.imageFileFilter,
    })),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "createTag", null);
__decorate([
    common_1.Put(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('tagImage', {
        storage: multer_1.diskStorage({
            destination: './client/resources/tags',
            filename: file_upload_utils_1.editFileName,
        }),
        fileFilter: file_upload_utils_1.imageFileFilter,
    })),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "editTag", null);
TagsController = __decorate([
    common_1.Controller('tags'),
    __metadata("design:paramtypes", [tags_service_1.TagsService])
], TagsController);
exports.TagsController = TagsController;
//# sourceMappingURL=tags.controller.js.map