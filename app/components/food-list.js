(function() {
	'use strict';

	function fecthFoods($http) {
		return $http.get('/app/mockData/foods.json')
								.then(function(response){
									return response.data;
								});
	}

	function foodListController($http) {
		var listVm = this;

		listVm.foodList = [];

		listVm.$onInit = function() {
			fecthFoods($http).then(function(foods){
				listVm.foodList = foods;
			});
		};

		listVm.upRating = function(food) {
			if(food.rating < 5) {
				food.rating += 1;
			}
		};

		listVm.downRating = function(food) {
			if(food.rating > 1) {
				food.rating -= 1;
			}
		}
	}


	angular.module('foodApp').component('foodList', {
		templateUrl: '/app/templates/food-list.html',
		controllerAs: 'listVm',
		controller: ['$http', foodListController]
	});
}());