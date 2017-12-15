import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngResource from 'angular-resource';
import ngComponentRouter from 'ngcomponentrouter';

import 'angular-aria';
import 'angular-animate';
import ngMaterial from 'angular-material';

import 'angular-material/angular-material.css'
import 'material-design-icons';
import '../style/app.css';

import UserService from './services/user.service';

import AppComponent from './app.component';
import UserComponent from './components/user/user.component';
import UsersComponent from './pages/users/users.component';

import NotFoundComponent from './pages/notfound/notfound.component';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [
    ngMaterial,
    ngComponentRouter,
    ngSanitize,
    ngResource,
    /* other dependencies here */
  ])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  })
  .value('$routerRootComponent', MODULE_NAME)
  .factory('userService', ['$resource', UserService])
  .component('app', AppComponent)
  .component('notfound', NotFoundComponent)
  .component('user', UserComponent)
  .component('users', UsersComponent);



