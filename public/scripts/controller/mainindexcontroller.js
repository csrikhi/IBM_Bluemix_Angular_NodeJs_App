/*
Main Controller of the App that is helping to display the user Name and also directing the user to the Doc Page
*/
app.controller("mainindexctrl",function($scope,$state,loginauthservice,localStorageService){
	$scope.menu_show=false;
	$scope.isUserLoggedIn=false;
	$scope.displaymenufnc=function(){
		$scope.menu_show= !$scope.menu_show; 
		//console.log($scope.menu_show);	
	};
	var securitykey= loginauthservice.authDetails;
	$scope.logout=function(){
		sessionStorage.removeItem(securitykey);
		sessionStorage.clear();
		$state.go('loginpage');
		
		
	}


	$scope.return_doc_page=function(){
		$state.go('docpage');
		
	}


});

