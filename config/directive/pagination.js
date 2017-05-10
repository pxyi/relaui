app.directive('pagination', function () {
	return {
		restrict: 'EA',
		templateUrl: 'config/directive/directiveView/pagination.html',
		replace: true,
		scope: {
			url: '@',															// 请求地址
			data: '=',														// 请求结婚存储变量
			query: '='														// 查询条件
		},
		controller: function ($scope, $http) {
			$scope.query = {};
			/* 定义每页显示条数 select */
			$scope.pageNumList = [{value: 10, text: 10},{value: 20, text: 20},{value: 30, text: 30},{value: 50, text: 50},{value: 100, text: 100}];
			/*
			 *	查询函数
			 */
			$scope.query.$query = function (pageNo) {
				/*
				 *	定义默认查询条件、查询页数及每页显示条数
				 */
				$scope.query.pageNo = pageNo ? pageNo : 1;
				$scope.query.pageSize = $scope.pageNumber ? $scope.pageNumber.value : 10;
				/*
				 *	将除了 $query 以外的键值赋值给 params
				 */
				var params = {};
				for(v in $scope.query){
					if(v !== '$query'){
						params[v] = $scope.query[v];
					}
				}
				$scope.$emit('loading', true);
				$http({
					url: $scope.url,				// url 地址由 父级 controller 或 引用属性 提供
					method: 'get',
					params: params
				}).then(function (res) {
					$scope.$emit('loading', false);
					/*
					 *	将值赋给 $scope.data 
					 */
					$scope.data = res.data;
					if(res.data.code == 1000){
						/* 当前页 */
						$scope.pegeNo = res.data.pageNo;
						/* 总条数 */
						$scope.pageCount = res.data.pageCount;
						/* 显示条数 */
						$scope.pageSize = res.data.pageSize;
						/* 总页数 */
						$scope.pageTotal = Math.ceil(res.data.pageCount/res.data.pageSize);
					}else{
						$scope.$emit('prompt', {text: res.data.message});
					}
				}, function (e) {
					$scope.$emit('loading', false);
					$scope.$emit('prompt', {text: '网络错误，请刷新重试'});
				});
			}
			/*
			 *	打开页面查询第一页，默认查询条件由父级 controller 提供
			 */
			$scope.query.$query(1, $scope.query);
		},
		//link函数主要用于操作dom元素,给 dom元素绑定事件和监听. 
		link: function (scope,element,attrs) {
			/* input 只能输入数字 */
			scope.pagesNumberChange = function () {
				/* 匹配正整数 */
				scope.pagesNumber = parseInt(scope.pagesNumber.replace(/[^\d]/g,''));
				/* 最小页数为 1 */
				scope.pagesNumber = scope.pagesNumber <= 0 ? 1 : scope.pagesNumber;
				/* 最大页数为总页数 */
				scope.pagesNumber = scope.pagesNumber > scope.pageTotal ? scope.pageTotal : scope.pagesNumber;
			}
		}
	}
})