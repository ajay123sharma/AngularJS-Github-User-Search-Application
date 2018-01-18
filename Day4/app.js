(function() {   /*IIFE FUNCTION*/

var app = angular.module("githubviewer",[]);
 

var MainCtrl = function($scope,$http){

  
    var OnUserComplete = function(response){
        $scope.user = response.data;             /*On succesfull return of promise*/
    };
     
       var onerrors = function(reason){
        $scope.error = "user data could not fetched ...";  /*on get error to fetched data*/
    };
   
    $http.get("https://api.github.com/users/angular")     /*return promise when error comes*/
        .then(OnUserComplete,onerrors);

    $scope.username = "angular";  
    $scope.message = "Github User";

}; 
/*app.controller("MainCtrl",["$scope","$http",MainCtrl]);  /*  you can write this also to minifi code*/
app.controller("MainCtrl",MainCtrl);   
}());
