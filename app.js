(function(){

    var app = angular.module("app", ["ui.router"]);

    app.run(function ($rootScope) {
        try {
            var user = JSON.parse(localStorage.getItem("user"));
            if (user.dept == undefined) {
                console.log("empty object");
                $rootScope.test = true;

            }
            else {
                $rootScope.user = user;
                $rootScope.test = false;
                console.log(user.dept);
            }
        }
        catch (err) {
            console.log(err)
        }
    })

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state("home",
        {
            url: "/",
            templateUrl: "templates/home.htm",
            controller:"onetimeCtrl"
        }
        ).state("index", {
            url: "/index",
            templateUrl: "templates/index.htm",
            controller: "indexCtrl"
        })

    })
app.controller("bodyCtrl", function($scope){
$scope.test = "Enersto de la cruz"

})

app.controller("onetimeCtrl", function ($scope, $state, $rootScope) {
    if ($rootScope.test == false) {
        $state.go("index")
        console.log("index")
    }
   

    $scope.submit = function () {
        var user = {
            name: $scope.name,
            dept: $scope.dept,
            email: $scope.email
        }
        localStorage.setItem("user", JSON.stringify(user));
        $state.go("index")

    }
   
})

app.controller("indexCtrl", function ($scope, $state) {
   
})

})()