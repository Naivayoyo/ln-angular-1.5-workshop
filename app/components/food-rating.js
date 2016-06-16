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

	angular.module('lnAngularApp').component('foodRating', {
		templateUrl: '/app/templates/food-rating.html',
		controllerAs: 'ratingVm',
		controller: foodRatingController,
		transclude: true,
		bindings: {
			rating: '<' // one-way-binding
		}
	});
}());