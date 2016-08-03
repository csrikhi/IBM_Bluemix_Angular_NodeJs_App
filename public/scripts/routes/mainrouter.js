/***
Angular Routing Mechanism Being Implemented using Run and Config 
***/

app.config(function($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
  localStorageServiceProvider.setStorageType('localStorage');
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/loginpage");
  //
  // Now set up the states
  $stateProvider
  .state('loginpage', {
    url: "/loginpage",
    templateUrl: "partials/_login.html"
  })
  .state('docpage', {
    url: "/docpage",
    templateUrl: "partials/_docpage.html"
  })
  .state('newsevent', {
    url: "/newsevents",
    templateUrl: "partials/newevents.html"
  })
  .state('contactus', {
    url: "/contactus",
    templateUrl: "partials/contactus.html"

  })
  .state('404', {
    // no url defined
    template: "partials/_error.html"
  })
  .state('/', {
   url: "/loginpage",
   templateUrl: "partials/_login.html"

 });
})
.run(['$rootScope','$state','$stateParams','$location','$http','loginauthservice','localStorageService',function($rootScope,$state,$stateParams,$location,$http,loginauthservice,localStorageService){
  $rootScope.$on('$stateChangeStart',function(event,toState,toParams,nextState,nextParams){
   var localStorageDetails=sessionStorage.getItem('storedUser');
   if(toState.name!="loginpage"){
    if(localStorageDetails==null||localStorageDetails==undefined){
      event.preventDefault();
      $state.go('loginpage');
    } 

  }else if(localStorageDetails!=null||localStorageDetails!=undefined){
    event.preventDefault();
    $rootScope.isUserLoggedIn=true;
    $state.go('docpage');


  }

})

}]);
