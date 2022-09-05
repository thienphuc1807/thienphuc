var app = angular.module('myapp', ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
  // trang chủ
    .when("/home", {
      templateUrl: "./includes/home.html?" + Math.random()
    })
  // trang sản phẩm
    .when("/products", {
      templateUrl: "./includes/products.html?" + Math.random(),
    })
  // trang giỏ hàng
    .when("/cart", {
      templateUrl: "./includes/cart.html?" + Math.random(),
    })
  // truyền tham số từ trang giỏ hàng
    .when("/cart/:param", {
      templateUrl: "./includes/cart.html?" + Math.random(),
      controller: "changeQuantity"
    })
    .otherwise({ redirectTo: "/home" });
});




