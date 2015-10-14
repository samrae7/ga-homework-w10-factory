angular.module('photoApp')
  .controller('PhotosController', function(PhotosFactory) {

    var self = this

    PhotosFactory.getPhotos()
    .then(function(response) {
      self.photos = response;
      console.log(response)
    });

    self.showPhoto = function(id) {
      self.photoShow=id
    }

    self.addPhoto = function() {
      PhotosFactory.addPhoto(self.newPhoto)
      .then(function(response){
        self.photos.push(response)
      })
      self.newPhoto={}
    }

    self.deletePhoto = function(id) {
      PhotosFactory.deletePhoto(id)
      .then(function(response){
        self.photos.splice(id-1, 1);
        //this function does not currently work for items I have added as they do not have an id

        //also test the api to see if you send it an object with all the fields will it send you the object back (rather than an empty object) for a delete
      })
    }

    self.editPhoto = function(id) {

    }


  })