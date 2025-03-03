angular.module('loanApp', [])
.controller('LoanController', ['$scope', function($scope) {
  $scope.loan = {
    invoice: 700000000,
    downpayment: 0,
    installments: 6,
    interestRate: 23.8,
    amount: 0,
    infrastructureFee: 0,
    interest: 0,
    totalRepayment: 0,
    payment: null
  };

  $scope.calculate = function() {
    // Calculate loan amount
    $scope.loan.amount = $scope.loan.invoice - $scope.loan.downpayment;

    // Calculate infrastructure fee
    $scope.loan.infrastructureFee = $scope.loan.amount * 0.025 * $scope.loan.installments;

    // Calculate loan interest
    $scope.loan.interest = Math.round((($scope.loan.amount * ($scope.loan.installments + 1)) / 2400) * $scope.loan.interestRate);

    // Calculate total repayment
    $scope.loan.totalRepayment = $scope.loan.amount + $scope.loan.interest;

    // Calculate monthly payment
    $scope.loan.payment = Math.round($scope.loan.totalRepayment / $scope.loan.installments);
  };
}]);