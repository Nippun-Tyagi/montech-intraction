'use strict';

const path = require('path');
const fs = require('fs');

//Function to search file using filename inside folder 
exports.searchFile = function searchFile(startPath, filter, depth, callback, folderDepth = 0) {
    if (!fs.existsSync(startPath)) {
        console.log("file found ", startPath);
        return;
    }

    if (depth && !folderDepth) {
        folderDepth = 1;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory() && (!folderDepth || depth > folderDepth)) {
            folderDepth += 1;
            searchFile(filename, filter, depth, callback, folderDepth); //recurse
            folderDepth -= 1;
        } else if (filter.test(filename)) {
            callback(filename);
        }
    };
};