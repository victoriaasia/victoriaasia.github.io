	var todoApp = angular.module('todoApp',[]);
	todoApp.controller('TodoController', ['$scope', function($scope) {

  $scope.todos = [];
	$scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) : [ {text: 'First', done: false}, {text: 'Second', done: false} ];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.addTodo = function() {
		$scope.todos.push({
				text: $scope.todoText,
				done: false
			});
		$scope.todoText = ''; //clear input after adding
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};

  $scope.remove = function (index) {
      $scope.todos.splice(this.$index, 1);
      localStorage.removeItem(index);
      localStorage.setItem('todos', JSON.stringify($scope.todos));
      };

}]);
