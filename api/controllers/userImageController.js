"use strict";

var mongoose = require("mongoose"),
  UserImage = mongoose.model("UserImage");

exports.list_all_userImages = function(req, res) {
  UserImage.find({}, function(err, images) {
    if (err) res.send(err);
    res.json(images);
  });
};

exports.create_userImage = function(req, res) {
  var new_userImage = new UserImage(req.body);
  new_userImage.save(function(err, image) {
    if (err) res.send(err);
    res.json(image);
  });
};

exports.upload_image = function(req, res) {
  UserImage.findOneAndUpdate(
    { _id: req.params.code },
    req.body,
    { new: true },
    function(err, image) {
      if (err) res.send(err);
      res.json(image);
    }
  );
};

exports.foo = function(req, res) {
  console.log(req.files);
  if (!req.files) return res.status(400).send("No files were uploaded.");

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv("/home/mwilson/fileUpload/filename.jpg", function(err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
};
