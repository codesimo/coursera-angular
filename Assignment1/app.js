(function () {
  "use strict";
  angular
    .module("LunchCalculator", [])
    .controller("LunchCalculatorController", LunchCalculatorController);
  LunchCalculatorController.$inject = ["$scope"];

  function LunchCalculatorController($scope) {
    $scope.foodList = "";
    $scope.message = "";

    $scope.getMessage = function () {
      $scope.message = makeMessage($scope.foodList);
    };

    function makeMessage(foodList) {
      if (foodList == "") return "Please enter data first";
      var nItems = foodList.split(",").length;
      if (nItems <= 3) return "Enjoy!";
      else return "Too much!";
    }
  }
})();
