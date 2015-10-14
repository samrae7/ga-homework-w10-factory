angular.module('photoApp')
  .controller('PhotosController', function(PhotosFactory) {

    var self = this

    this.showPhoto = function(id) {
      self.photoShow=id
    }

    PhotosFactory.getPhotos()
    .then(function(response) {
      self.photos = response;
      console.log(self.photos)
    });

    self.addPhoto = function() {
      PhotosFactory.addPhoto(self.newPhoto)
      .then(function(response){
        self.photos.push(response)
      })
      self.newPhoto={}

    }


  })