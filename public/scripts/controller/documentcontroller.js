/*
This is the controller that is performing the http request to the JSON data 
*/
app.controller("documentctrl",function($scope,$http,loginauthservice){
	$scope.oneAtATime="true";
	$scope.user_name=loginauthservice.userName;
	//console.log($scope.user_name);
	$http.get("../scripts/jsondata/docjson.json").then(function(response){
		var jsonString = JSON.stringify(response);
		var result = JSON.parse(jsonString);
		$scope.documentLoader=result.data;
		//console.table(result.data,['id','name','category']);
		//console.log(result);

	});


});