/**
 *	Name: ajax请求依赖注入
 *
 *	$ajax.get 使用方法
 *		$ajax.get(url, params, scope).then(CallSuccsss, CallError);
 *			url					: 	String 请求地址
 *			params			: 	Object 请求参数
 *			scope				:   引用controller $socpe
 *			CallSuccess : 	请求成功回调，参数为返回参数
 *			CallError		:   请求失败回调：参数为失败原因
 *
 *	$ajax.post 同上
 *		$ajax.post(url, params, scope).then(CallSuccess, CallError);
 *
 *	$ajax.upfile 同上
 *		$ajax.post(url, params, scope).then(CallSuccess, CallError);
 */
app.factory('$ajax', function ($http, $q, $rootScope, $state) {
	var serialize = function (data){
		var val="",str="";
		for(var item in data){
			str=item+"="+data[item];
			val+=str+'&';
		}
		return val.slice(0,val.length-1);
	}
	return {
		get: function (url, params, scope) {
			params.token = $rootScope.token;
      var deferred = $q.defer();
			scope.$emit('loading', true);
			$http({
				url: url,
				method: 'get',
				params: params
			}).then(function (res) {
				scope.$emit('loading', false);
				if(res.data.code == 1003){
					localStorage.clear();
					scope.$emit('prompt', {text: res.data.message, href: 'login'});
				}else{
					deferred.resolve(res);
				}
			}, function (e) {
				scope.$emit('loading', false);
				scope.$emit('prompt', {text: '网络错误，请刷新页面重试'});
				deferred.reject(e);
			});
			return deferred.promise;
		},
		post: function (url, params, scope) {
      var deferred = $q.defer();
			params.token = $rootScope.token;
			scope.$emit('loading', true);
			$http({
				url: url,
				method: 'post',
				data: serialize(params),
				headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
			}).then(function (res) {
				scope.$emit('loading', false);
				if(res.data.code == 1003){
					localStorage.clear();
					scope.$emit('prompt', {text: res.data.message, href: 'login'});
				}else{
					deferred.resolve(res);
				}
			}, function (e) {
				scope.$emit('loading', false);
				scope.$emit('prompt', {text: '网络错误，请刷新页面重试'});
				deferred.reject(e);
			});
			return deferred.promise;
		},
		upfile: function (url, params, scope) {
      var deferred = $q.defer();
			params.token = $rootScope.token;
			scope.$emit('loading', true);
			$http({
				url: url,
				method: 'post',
				headers: {
					'Content-Type': undefined
				},
				transformRequest: function() {
					var formData = new FormData();
					for(var v in params){
						formData.append(v, params[v]);
					}
					return formData;
				}
			}).then(function (res) {
				scope.$emit('loading', false);
				if(res.data.code == 1003){
					localStorage.clear();
					scope.$emit('prompt', {text: res.data.message, href: 'login'});
				}else{
					deferred.resolve(res);
				}
			}, function (e) {
				scope.$emit('loading', false);
				scope.$emit('prompt', {text: '网络错误，请刷新页面重试'});
				deferred.reject(e);
			})
			return deferred.promise;
		}
	}
});

