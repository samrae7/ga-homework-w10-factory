angular.module('photoApp')
  .factory('PhotosFactory', function($http, $q) {

    var PhotosFactory = {


      getPhotos: function() {
        var deferred = $q.defer();

        $http
          .get('http://jsonplaceholder.typicode.com/photos')
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(error) {
            deferred.reject(error);
          })

          return deferred.promise;
      },


      addPhoto: function(photo) {

        var deferred = $q.defer();

        $http
          .post('http://jsonplaceholder.typicode.com/photos', photo)
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(error) {
            deferred.reject(error);
          })

          return deferred.promise;
        },

      deletePhoto: function(id) {
        var deferred = $q.defer();

        $http 
          .delete('http://jsonplaceholder.typicode.com/photos/' + id)
          .success(function(response) {
            deferred.resolve(response);
            console.log('success', id)
          })
          .error(function(error) {
            deferred.reject(error);
          })

        return deferred.promise;
      }
    }

    return PhotosFactory
})
