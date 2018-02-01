(function() {   /*IIFE FUNCTION*/
var app = angular.module("githubviewer",[]);
    
   
var MainCtrl = function($scope, $http, $interval, $log, $anchorScroll, $location){
    var OnUserComplete = function(response){   /*return when data come succefully from api*/
        $scope.user = response.data;           /*store response data in user scope*/
            
        $http.get($scope.user.repos_url)  /*return promise for repositary*/ 
        .then(onRepos,on_errors_repos);        
    };
     
        var onRepos = function(response){
            $scope.repos = response.data;   /*on succesive get data of repositary*/
            $location.hash("userDetails"); /*using $loacation service we change in address bar*/
            $anchorScroll(); /*take scroller on userDetails id div automatically scroll page and show only result*/
        };
          
        var on_errors_repos = function(reason){
            $scope.error = "user repositary data could not fetched.."
        };

        var on_errors = function(reason){
            $scope.error = "user data could not fetched ...";  
        };

        var decrementCountdown = function(){
            $scope.countdown -= 1;           /*decrment count down by 1*/
            if($scope.countdown < 1){           /*if countdown 0 or less than 1 pass a default search input*/
                $scope.search($scope.username); /*at the end of count pass default username inside search box*/
            }
        };  /*automatic search logic using servies*/ /*use set timeout for set a time for user and invoke this funtion */
  

 
    
    var countdownInterval = null;   /*for user beat countdown then to stop double search we save search object and stop $interval to invole not again*/
    var starcountDown = function(){
     /*store search object inside countdownInterval variable*/
     countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);  /*invoke $interval servies which we pass decrementcountdown function and countdown value */
    };


   $scope.search = function(username){
        $log.info("search for " + username);     /*print in console what user search using log service or you can print error warn,debug*/
        $http.get("https://api.github.com/users/" + username)    
        .then(OnUserComplete,on_errors);
         
        if(countdownInterval){  /*check if there is countdowninterval then cancel another interval that invoke when timeout*/
            $interval.cancel(countdownInterval);  /*if countdownInterval is true then cancel $interval*/
            $scope.countdown = null; /*remove countdown number after search button click or bit the timer by user */
        }

    };

    $scope.username = "angular";  
    $scope.message = "Github User";
    $scope.reposortOrder = '-stargazers_count';  /*filter for repos according to stargazer going value in  reposortOrder*/
    $scope.countdown = 5;   /*initalize a var called countdown equal to 5*/
    starcountDown();  /*start countdown with invoke this function  */

};  
 
app.controller("MainCtrl",MainCtrl);   
}());
