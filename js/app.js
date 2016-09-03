var app  = angular.module("myApp",[]);
app.controller("TestCtrl",["$scope", function($scope){
	$scope.names = [
     'Carmen','Andrei','Cristi','Ionut','Alex'
	]
	$scope.name="Andrei";
    // Add function
	$scope.clickBtn=function(){
		console.log("Button Clicked");
		console.log($scope.firstname);


		$scope.names.push($scope.firstname);
		$scope.firstname = "";

	}
      // Delete function
      $scope.delete = function(index){
	     console.log(index);
	     $scope.names.splice(index,1);
      }

}]);