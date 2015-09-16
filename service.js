'use strict'
//Demonstrate how register services
//In this case it is a simple value service./
var myApp = angular.module('myApp.service', []);

myApp.value('version', '0.1');

myApp.factory("AuthenicationService", ['location', function($location) {

    return {
    $scope.login = function() {
            if ($scope.creds.username == 'admin' && $scope.creds.password == '1234') {
                $location.path('/dashboard');
            } else {
                $('.alert-box').show();
            }
        },
        $scope.logout = function() {
            $location.path('/');
        }
    }
}]);

myApp.factory('CustomerService', function(){

	var customers = [
	    {name: 'jayven', age: 13, repin: 'Vtown'},
	    {name: 'Tuk', age: 16, repin: 'San Jose'},
	    {name: 'Sista', age: 14, repin: 'Redwood City'},
	    {name: 'Tayden', age: 10, repin: 'Leftwitch'},
	    {name: 'Bone', age: 7, repin: 'Hunter && Mayfield'},
	    {name: 'May-May', age: 7, repin: 'CrossTracks'}
	];

	var factory = {};

	factory.getCostomers = function(){
		return customers;
	}

	factory.postCustomers = function(customers){
		//code to add customers
	}
	return factory;

});