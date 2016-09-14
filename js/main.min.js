"use strict";

let app = angular.module("toDo", []);

app.controller("taskCtrl", function($scope) {
	$scope.doneTasks = [];
	$scope.todoTasks = [];
	$scope.showToDoTasks = true;
	$scope.showDoneTasks = false;

	$scope.showToDo = function() {
		$scope.showToDoTasks = true;
		$scope.showDoneTasks = false;
	};

	$scope.showDone = function() {
		$scope.showToDoTasks = false;
		$scope.showDoneTasks = true;
	};

	$scope.addTask = function() {
		let task = {};

		task.text = $scope.text;
		task.done = false;

		$scope.todoTasks.push(task);
		$scope.text = "";
	};

	$scope.doneTask = function(index) {
		$scope.todoTasks[index].done = true;
		$scope.doneTasks.push($scope.todoTasks[index]);
		$scope.todoTasks.splice(index, 1);
	};

	$scope.deleteTask = function(index, item) {
		if (item.done === false) {
			$scope.todoTasks.splice(index, 1);
		}
		else {
			$scope.doneTasks.splice(index, 1);
		}
	};
});