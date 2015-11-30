'use strict';

angular.module('amplience.AppHost', [])

.service('AppHost', ['$q', function($q){
    var appHost = new amp.Host();
    return {
        exit: function(){
            appHost.exit();
        },
        renewToken: function(){
            var readyPromise = $q.defer();
            appHost.renewToken(function(response){
                return readyPromise.resolve(response)
            },function(error){
                return readyPromise.reject(error);
            });
            return readyPromise.promise;
        },
        connect: function(){
            var readyPromise = $q.defer();
            appHost.onReady(function(response){
                return readyPromise.resolve(response)
            });
            return readyPromise.promise;
        },
        token: function(){
            return appHost.currentToken;
        },
        activationData: function(){
            return appHost.activationData;
        },
        onActivate: function(cb){
            return appHost.onActivate(cb);
        },
        onDeactivate: function(cb){
            return appHost.onDeactivate(cb);
        },
        onAssetSelected: function(cb){
            return appHost.onAssetSelected(cb);
        },
        onAssetDropped: function(cb){
            return appHost.onAssetDropped(cb);
        },
        checkClose: function(cb){
            return appHost.checkClose(cb);
        }
    }
}]);