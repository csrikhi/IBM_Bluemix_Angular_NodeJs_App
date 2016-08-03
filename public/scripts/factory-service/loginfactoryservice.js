/***
This is the factory service that is being used to store the  dummy credentials of the  user and the factory function is being called in the login controller


***/

app.factory("loginauthservice",['$http','$timeout',function(){
	var authDetails={
		userName:"admin",
		password:'admin'

	}
	return authDetails;

}]);