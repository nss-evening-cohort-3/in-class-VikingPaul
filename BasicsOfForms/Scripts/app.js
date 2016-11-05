var app = angular.module("stuff", []);

app.controller("things", function($scope, $http) {
    $scope.stuff = {
        email: "",
        password: "",
        passwordconfirmation: ""
    };
    $scope.click = () => {
        $http.post('../api/angularapi', $scope.stuff).success(() => {
            console.log("success")
        })
    }
})