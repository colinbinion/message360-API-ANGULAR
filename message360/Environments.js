/**
  * Message360
  *
  * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Message360')
    .factory('Environments',
        function () {
            return {
                //Our message360 production environment.  This is our latest stable release.
                PRODUCTION: "production",
        
                //Pre-Production environment used to test your code in our beta systems.  There is a good chance nothing will work here.  Don't use it unless instructed by our staff.
                PREPRODUCTION: "preproduction",
        
                //Internal development testing.  This configuration of the API is not available to the public.
                DEVELOPMENT: "development"
            };
        }
    );

}(angular));
