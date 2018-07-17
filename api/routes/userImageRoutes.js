'use strict';
module.exports = function(app) {
  var userImage = require('../controllers/userImageController');

  // todoList Routes
  app.route('/images')
    .post(userImage.create_userImage)
    .get(userImage.list_all_userImages);

  app.route('/images/:code')
    .put(userImage.upload_image);
};