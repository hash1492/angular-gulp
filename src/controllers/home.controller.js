var app = angular.module('AppModule', []);


app.controller('HomeController', HomeController)

function HomeController() {
    this.title = 'This is the HomeController'
}