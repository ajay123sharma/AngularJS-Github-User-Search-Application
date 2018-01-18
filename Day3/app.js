
var MainCtrl = function($scope,$http){
 
 
    var OnUserComplete = function(response){
        $scope.user = response.data;
    };
     
       var onerrors = function(reason){
        $scope.error = "user data could not fetched ...";
    };
   
    $http.get("https://api.github.com/users/ajay123sharma")    
        .then(OnUserComplete,onerrors);

 
    $scope.message = "hello Mr.";

}; 
