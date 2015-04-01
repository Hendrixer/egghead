import angular from 'angular';

class MainController {
  constructor(){
    this.title = 'MainController';
  }
}

angular.module('ng6', [])
.controller('MainController', MainController)
