(function() {
	'use strict';

	function foodRatingController() {
		var ratingVm = this;

		ratingVm.stars = [];

		ratingVm.$onInit = function() {
			ratingVm.stars = new Array(ratingVm.rating);
		};

		ratingVm.$onChanges = function() {
			ratingVm.stars = new Array(ratingVm.rating);
		}
	}

	angular.module('foodApp').component('foodRating', {
		templateUrl: '/app/templates/food-rating.html',
		controllerAs: 'ratingVm',
		controller: foodRatingController,
		bindings: {
			rating: '<' // one-way-binding
		}
	});
}());