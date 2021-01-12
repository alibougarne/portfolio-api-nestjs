"use strict";
exports.__esModule = true;
var path_1 = require("path");
exports.imageFileFilter = function (req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.editFileName = function (req, file, callback) {
    var name = file.originalname.split('.')[0];
    var fileExtName = path_1.extname(file.originalname);
    var randomName = Array(10)
        .fill(null)
        .map(function () { return Math.round(Math.random() * 16).toString(16); })
        .join('');
    callback(null, "" + randomName + fileExtName);
};
