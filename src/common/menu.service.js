(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$https', 'ApiPath'];
function MenuService($https, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $https.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $https.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.Savedata = function (short_name) {
    console.log(short_name);
    return $https.get(ApiPath + '/menu_items/' + short_name + '.json')
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .then(function (error) {
      console.log(error);
      return error.data;
    });
  };

}



})();
