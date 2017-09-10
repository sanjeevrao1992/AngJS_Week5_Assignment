(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://sanjeev-week5-module.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
