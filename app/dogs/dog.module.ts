﻿'use strict';
// module dogsrus.virtdog {
  (() => {
    angular.module('app.dog', []);
  })();
  // we don't ever refer to the app module except in tests
  // but the other modules may be refered 2+ times
  export function getModuleDog(): ng.IModule {
    return angular.module('app.dog');
  }
// } 
