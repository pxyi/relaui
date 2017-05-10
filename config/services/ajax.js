// app.provider('$ajax', {
// 	$get: function () {
// 		console.log('get')
// 	},
// 	$post: function () {
// 		console.log('post')
// 	}
// });
app.factory('$ajax', function () {
	return {
		get: function () {
			console.log('get')
		},
		post: function () {
			console.log('post')
		}
	}
});