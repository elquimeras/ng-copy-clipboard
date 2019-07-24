/**/

(function() {
    'use strict';    
    
    angular
    .module('myApp')
    .service('clipboardService', clipboardService)

    clipboardService.$inject = ['$window'];
  
    function clipboardService($window) {
      var
          body = angular.element($window.document.body),
          textarea = angular.element('<textarea/>');
          textarea.css({ position: 'fixed', opacity: '0' });
      var
          copy = function (value) {
              textarea.val(value);
              body.append(textarea);
              textarea[0].select();
              try {
                  var successful = document.execCommand('copy');
                  if (!successful) throw successful;
                  alert("Copied to clipboard!");
              } catch (err) {
                  console.log("errCopy", err);
                  alert("Error copying to clipboard!");
              }
              textarea.remove();
          };
   
      return {
          copy: copy
      };
    }
})();
