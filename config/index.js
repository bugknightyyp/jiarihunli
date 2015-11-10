//config

if (process.env.NODE_ENV == 'development'){
  module.exports = require('./dev')
} else {
  module.exports = require('./pro')
}


module.exports.blogContentDir = process.cwd() + '/content';
module.exports.blogConfigFilename = 'postfile.json';

module.exports.article = {};
module.exports.article.tagUrl = '/category/'
