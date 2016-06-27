var glob = require("glob");
var path = require('path');
var etc = require('etc');

function notc(dir, options) {
    var etcer = etc();

    // find parentDir
    if (options && options.parentConf) {
        var findParentDir = require('find-parent-dir');

        var pdir = findParentDir.sync(dir, options.parentConf);
        if (pdir) {
            etcer.folder(path.join(pdir, options.parentConf));
        }
    }
    return etcer.toJSON();
}


module.exports = notc;