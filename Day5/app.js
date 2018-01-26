(function() {   /*IIFE FUNCTION*/
var app = angular.module("githubviewer",[]);
   

var MainCtrl = function($scope,$http){
    var OnUserComplete = function(response){   /*return when data come succefully from api*/
        $scope.user = response.data;           /*store response data in user scope*/
            
        $http.get($scope.user.repos_url)  /*return promise for repositary*/ 
        .then(onRepos,on_errors_repos);        
    };
    
        var onRepos = function(response){
            $scope.repos = response.data;   /*on succesive get data of repositary*/
        };
        
        var on_errors_repos = function(reason){
            $scope.error = "user repositary data could not fetched.."
        };

        var on_errors = function(reason){
            $scope.error = "user data could not fetched ...";  
        };
  

    $scope.search = function(username){
        $http.get("https://api.github.com/users/" + username)    
        .then(OnUserComplete,on_errors);

    };


    $scope.username = "";  
    $scope.message = "hello Mr.";
}; 
/*app.controller("MainCtrl",["$scope","$http",MainCtrl]);    you can write this also to minifi code*/
app.controller("MainCtrl",MainCtrl);   
}());
