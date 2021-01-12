"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var CustomException = /** @class */ (function (_super) {
    __extends(CustomException, _super);
    function CustomException(message, HttpStatus) {
        return _super.call(this, {
            status: HttpStatus,
            error: message
        }, HttpStatus) || this;
    }
    return CustomException;
}(common_1.HttpException));
exports.CustomException = CustomException;
