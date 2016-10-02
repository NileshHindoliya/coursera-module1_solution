(function(){
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchController);
	LunchController.$inject = ['$scope'];

	function LunchController($scope){
		$scope.msg = "";
		$scope.status = "";
		$scope.col = "";

		$scope.checkItems = function() {
			var menu;

			if($scope.input)
			{
				$scope.input = $scope.input.trim();
				menu = $scope.input.split(',');
				
				if(menu.length <=3 && menu.length >0)
				{
					$scope.msg = "Enjoy!";
					$scope.status = "has-success";
					$scope.col = "green";
				}
				else
				{
					$scope.msg = "Too much!";
					$scope.status = "has-success";
					$scope.col = "green";
				}
			}
			else
			{
				$scope.msg = "Please enter data first";
				$scope.status = "has-error";
				$scope.col = "red";
			}
		}
	}	
})();