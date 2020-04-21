"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class CategoryNotFoundException extends common_1.HttpException {
    constructor(message, st) {
        super({
            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            error: message,
        }, st);
    }
}
exports.CategoryNotFoundException = CategoryNotFoundException;
//# sourceMappingURL=CategoryNotFoundException.exception.js.map