var app  = angular.module("myApp",[]);
app.controller("TestCtrl",["$scope",'$http', function($scope, $http){
	$http.get("https://jsonplaceholder.typicode.com/users").then(function(response){
		console.log(response.data);
		$scope.data = response.data;
       });	
}]);