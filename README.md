IBM_Bluemix_Angular_NodeJs_App(Responsive App)
================================================================================
App  login username:admin
App login password:admin
---------------------------------
Technologies Used :Angular Js,Node Js,Html5,Css3

Web Responsive Application:This app can be viewed in 320px,480px,768px and 992px

Component:Login Component,Angular Factory for storing the credentials
Angualr routing for to redirecting to the pages contact us,Document page,New Updates


url for  App stored on Bluemix: https://csrikhi-doc-downloader.mybluemix.net
Git Repository:https://github.com/csrikhi/IBM_Bluemix_Angular_NodeJs_App.git

As this app is a small dummy App.So it has been assigned some restricted categories which are as follows:
--------------------
|Philosophy
|Science Fiction
|Fairy Tales
|Animals

Also the JSON File that has been created has limited number of books.So if the user tries to perform a search he will only  be able to filter the books from the below mentioned list

Category:Animals:
Book|"name":"Bees"|"name":"Cats"|"name":"Penguins"

Category:Philosophy:
Book|"name":"BeyondGodandEvil"|"name":"MJackson"|"name":"ProblemsofPhilosophy"|"name":"How-Far-Is-Far"|"name":"RoomWithView",
Category:ScienceFiction
Book|"name":"Eureka",   
category":"Fairytales
Book|"name":"BheemaTheSleepyHead"|"name":"The Prince"|"name":"BeyondGodandEvil"|"name":"BeyondGodandEvil"|"name":"FairyTalesGroup"|"name":"FortyStories"|"name":"Sarbasst's Tales"	
Please select/search the name of the books from the above mentioned categories or name.	






Abou The App:
---------------------

-This is a small Angular and Node Js Based Application , useful  for the users who want to search the books based on the category and download and read the ebook 
-The user to filter and perform the search based ,on typing the categories/book name.Also once the search has been performed on the desired category or book Name .
-The user can click the download button and the PDF file would open in a new page and it can be downloaded.

-A login screen is the first screen made available to the user.
-User needs to get himself authenticated by using the username:"admin" and password :"admin"  and once the  credentials are correct,the user would be directed to the Doc Page.The redirection to the doc page has been made possible using the angular routing mechanism.

-Pagination component has been used to direct between the pages to check the titles/categories  of the book
-An Accordion Component using  Angular Boot Strap  has been created for the user to get info on what searches that needs to be performed.
and can be viewed on an portable device ranging from Mobile,tablet to the Desktop.

The login Authentication service validates the input fields for null or empty and also matches the value from the local storage .Plus check the values from the  factory service


install the code for the sample program
--------------------------------------------------------------------------------
From a command/shell terminal
* `cd` into the parent directory you want to install the project in
* `git clone` the project into a child directory
* `cd` into that child directory
* run `npm install` to install dependencies

For example:

$ cd Projects
$ git clone https://github.com/csrikhi/IBM_Bluemix_Angular_NodeJs_App

... git output here ...

$ cd IBM_Bluemix_Angular_NodeJs_App

$ npm install

... npm output here ...


run locally
--------------------------------------------------------------------------------

After installing, run the server using

npm start

This should print the following to the console.

IBM_Bluemix_Angular_NodeJs_App: server starting on http://127.0.0.1:8080

OPen the Chrome Browser
Once the server is running, test it by visiting the following URL in your
browser:

http://127.0.0.1:8080





