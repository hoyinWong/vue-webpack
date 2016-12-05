'use strict';
var 
    path = require('path'),
    setting = {
        localserver: {
            root: './build',
            path: '',
            revRoot: './build'
        }
    },
    config = {
        localserver: setting.localserver,
        path: {
            root: setting.localserver.root,
            dest: path.join(setting.localserver.root, setting.localserver.path),
            jsDest: path.join(setting.localserver.root, setting.localserver.path, 'js')
       }
    };
    
module.exports = config;