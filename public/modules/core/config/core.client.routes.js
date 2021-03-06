'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).

 		state('realworld', {
			url: '/realworld',
			templateUrl: 'modules/core/views/realworld.client.view.html'
		}).

			state('pricing', {
			url: '/pricing',
			templateUrl: 'modules/core/views/pricing.client.view.html'
		}).

		state('projects', {
			url: '/projects',
			templateUrl: 'modules/core/views/projects.client.view.html'
		}).

       state('sitemap', {
                url: '/sitemap',
                templateUrl: 'modules/core/views/header2.client.view.html'
            }).
       state('instructors', {
                url: '/instructors',
                templateUrl: 'modules/core/views/instructors.client.view.html'
            }).
       state('curriculum', {
                url: '/curriculum',
                templateUrl: 'modules/core/views/curriculum.client.view.html'
            }).
			state('reviews', {
				url: '/reviews',
				templateUrl: 'modules/core/views/reviews.client.view.html'
			}).
			state('faqs', {
				url: '/faqs',
				templateUrl: 'modules/core/views/faqs.client.view.html'
			}).
			state('community', {
				url: '/community',
				templateUrl: 'modules/core/views/community.client.view.html'
			}).

        state('confirm', {
                url: '/confirmwebstorm',
                templateUrl: 'modules/core/views/confirmation.client.view.html'
            });

	}
]);
