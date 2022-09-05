app.controller('myCart', ($scope, $rootScope) => {
  $rootScope.carts = [];
  $scope.total = 0;

  // Tính tổng tiền
  $scope.totalPrice = function () {
    $scope.total = 0;
    $scope.carts.forEach(p => {
      $scope.total += (p.price * p.quantity);
    })
  }

  // Xoá sản phẩm khỏi giỏ hàng
  $scope.remove_cart = function (cart) {
    if (cart) {
      $scope.carts.splice($scope.carts.indexOf(cart), 1);
      $scope.total -= (cart.price * cart.quantity);
    }
  }

  // thông báo khi ấn nút thanh toán
  $scope.order = function () {
    if ($rootScope.carts.length !== 0) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thanh toán thành công',
        text: 'Cảm ơn bạn đã mua hàng ở GearVN',
        showConfirmButton: false,
        timer: 5000
      })
      setTimeout(function () { location.href = "./index.html" }, 2000);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Giỏ hàng hiện tại đang trống',
        text: 'Thêm sản phẩm vào giỏ để tiến hành thanh toán',
        showConfirmButton: false,
        timer: 5000
      })
    }
  }


});

// Thay đổi số lượng sản phẩm trong giỏ hàng
app.controller('changeQuantity', ['$scope', '$routeParams', function ($scope, $routeParams) {
  var paramId = $routeParams.param;
  // Tăng số lượng
  $scope.increaseQty = function () {
    $scope.carts.forEach(p => {
      if (paramId == p.id) {
        p.quantity += 1;
      }
    });
  }
  // Giảm số lượng
  $scope.decreaseQty = function () {
    $scope.carts.forEach(p => {
      if (paramId == p.id) {
        if (p.quantity >= 1) {
          p.quantity -= 1;
        }
      }
    });
  }

}]);