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
const contacts_service_1 = require("./contacts.service");
const contact_entity_1 = require("./contact.entity");
let ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    async createContact(contact) {
        return this.contactsService.saveContact(contact);
    }
    async updateTag(contact) {
        return this.contactsService.saveContact(contact);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_entity_1.Contact]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "createContact", null);
__decorate([
    common_1.Patch('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_entity_1.Contact]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "updateTag", null);
ContactsController = __decorate([
    common_1.Controller('contacts'),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
exports.ContactsController = ContactsController;
//# sourceMappingURL=contacts.controller.js.map