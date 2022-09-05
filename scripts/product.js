app.controller('productCtrl', ($scope, $http) => {
  $scope.products = [];
  $http
    .get("/data/products.json")
    .then(function (response) {
      $scope.products = response.data;
      // Tính số trang
      $scope.pageCount = Math.ceil($scope.products.length / $scope.pagesize);
    },
      function (response) {
        alert('Get data fail !');
      });

  //Thực hiện phân trang cho dữ liệu trên (6 mặt hàng mỗi trang).
  $scope.begin = 0;
  $scope.pagesize = 6;

  // Nút chuyển trang
  // Về Trang đầu
  $scope.first = function () {
    $scope.begin = 0;
  }

  // Trang tiếp theo
  $scope.next = function () {
    if ($scope.begin < ($scope.pageCount - 1) * $scope.pagesize) {
      $scope.begin += $scope.pagesize
    }
  }

  // Lùi lại trang trước
  $scope.previous = function () {
    if ($scope.begin > 0) {
      $scope.begin -= $scope.pagesize;
    }
  }

  // Trang cuối cùng
  $scope.last = function () {
    $scope.begin = ($scope.pageCount - 1) * $scope.pagesize;
  }

  // Thêm vào giỏ hàng
  $scope.addcart = function (product) {
    if (product) {
      $scope.carts.push({
        id: product.id, name: product.name,
        brand: product.brand, warranty: product.warranty,
        image: product.image, quantity: product.quantity,
        price: product.price
      });
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã thêm vào giỏ hàng',
      showConfirmButton: false,
      timer: 2000
    })
  }

})

