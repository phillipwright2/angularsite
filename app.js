var app = angular.module('personalPage', ['ui.router']);
app.config(function($stateProvider) {
       // $urlRouteProvider.otherwise("/index  
        $scope.person('phillip');
        $stateProvider
        .state("index",{
            url:"/index",
            templateUrl:"/index.html"
        })
        .state("blog1",{
            url: "/blog1",
            templateUrl: "/blog1.html"
        })
        .state("blog2", {
        url: "/blog2",
        templateUrl: "/blog2.html"
        })
        .state("blog3",{
            url:"/blog3",
        templateUrl: "/blog3.html"
c

    })
});
 varls
  AboutMeController = function($scope){
    $scope.message = 'kiss my ass';
 }; 
 //service
