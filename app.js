let app = angular.module('techApp', []);

app.controller('TechController', function($scope, $http){
    $http.get('sea.json')
    .then(function(response){
        $scope.technologies = response.data;
    });

    $scope.selectedTech = "";

});