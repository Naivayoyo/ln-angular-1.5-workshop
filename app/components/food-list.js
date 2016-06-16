(function() {
	'use strict';

	function fecthFoods($http) {
		return $http.get('/app/mockData/foods.json')
								.then(function(response){
									return response.data;
								});
	}

	function foodListController($http) {
		var lnVm = this;

		lnVm.foodList = [];

		lnVm.$onInit = function() {
			fecthFoods($http).then(function(foods){
				lnVm.foodList = foods;
			});
		};

		lnVm.upRating = function(food) {
			if(food.rating < 5) {
				food.rating += 1;
			}
		};

		lnVm.downRating = function(food) {
			if(food.rating > 1) {
				food.rating -= 1;
			}
		}
	}


	angular.module('lnAngularApp').component('foodList', {
		templateUrl: '/app/templates/food-list.html',
		controllerAs: 'lnVm',
		controller: ['$http', foodListController]
	});
}());