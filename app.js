var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope,$http) {
  $http.get("/tasks").then(function(res){
        $scope.tasks=res.data;
      },
      function(res){}
  )
  $scope.add = function(){
    var data = {"id":22, "content": $scope.newtask}
    $http({
      method: 'POST',
      url: '/tasks',
      data: data
      }).then(function(res){
          $http.get("/tasks").then(function(res2) {
                $scope.tasks=res2.data;
              }
          )
        }

    )

    $scope.newtask='';
  };
  $scope.removeItem = function (index) {
        $scope.tasks.splice(index, 1);
    };

});
