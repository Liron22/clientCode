var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.tasks=[]
  $scope.add = function(){
    $scope.tasks.push($scope.newtask);
    $scope.newtask='';
  }
  $scope.removeItem = function (index) {
        $scope.tasks.splice(index, 1);
    };

});
