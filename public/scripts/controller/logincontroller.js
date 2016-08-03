/*
This is is the area for login Controller where the user credebtials are being checked and authenticated and the user is then allowed to login

*/

app.controller("loginctrl",function($scope,$state,loginauthservice,localStorageService,$timeout){	
	$scope.loginAuthentication=function(username,password){
//loginAuthentication(username,password) from template	
var userId=$scope.username;
var password=$scope.password;
var reset_error,reset_success;
$scope.reset_error=true;
$scope.reset_success=true;
var securitykey= loginauthservice.authDetails;
if(userId===loginauthservice.userName && password==loginauthservice.password){
	sessionStorage.setItem("storedUser",userId);
	//$cookieStore.put('storeddata',securitykey);
	$state.go('docpage');
	return false;
}
else 
{
	$scope.errorMessage="Please Check Your Credentials";
	$timeout(function(){$scope.reset_error=false}, 700);   
}

};

});
