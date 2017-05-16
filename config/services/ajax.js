/**
 *	Name: ajax请求依赖注入
 *
 *	$ajax.get 使用方法
 *		$ajax.get(url, params).then(CallSuccsss, CallError);
 *			url					: 	String 请求地址
 *			params			: 	Object 请求参数
 *			CallSuccess : 	请求成功回调，参数为返回参数
 *			CallError		:   请求失败回调：参数为失败原因
 *
 *	$ajax.post 同上
 *		$ajax.post(url, params).then(CallSuccess, CallError);
 */
app.factory('$ajax', function ($http, $q) {
	return {
		get: function (url, params) {
      var deferred = $q.defer();
			$http({
				url: url,
				method: 'get',
				params: params
			}).then(function (res) {
				deferred.resolve(res);
			}, function (e) {
				deferred.reject(e);
			});
			return deferred.promise;
		},
		post: function (url, params) {
      var deferred = $q.defer(); 
      var val = '',str = '';
      for(var item in data){
        str = item + '=' + data[item];
        val += str + '&';
      }
      var data = val.slice(0, val.length - 1);
			$http({
				url: url,
				method: 'post',
				data: data,
				headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
			}).then(function (res) {
				deferred.resolve(res);
			}, function (e) {
				deferred.reject(e);
			});
			return deferred.promise;
		}
	}
});