1. The app consists of two screens -
	Login screen
	Main screen
2. The users can be of two types - Administrator and Normal Users. Administrator is currently identified by the credentials as 'username':'admin' and 'password':'admin'. Normal users are users with any credentials other than 'admin/admin'.
3. Normal users can see only entries with 'status' entries as 'active'. Administrator can see all the entries present in the database (irrespective of their status).
4. While normal users have "view only" rights, administrator can choose to change the status of the entries ('active' -> 'inactive' & 'inactive' -> 'active'). Administrator can also edit the details about the entries, and can even add new entries into the database.

The tech stack comprises of MongoDB, Node JS (for backend), and HTML, CSS, Javascript (for frontend). The API calls are made using jQuery post methods, and the state of the app (like whether the user type is 'administrator' or 'normal user') is stored using HTML5 localStorage variables.

Example data entries into the database:
> use printr
> db.featuredItems.insert({"status" : "active", "name" : "feature 1", "tags" : [ "printers", "vr" ], "images" : [ "http://www.lilianricaud.com/travail-en-reseau/wp-content/uploads/2012/04/google-chrome-300x300.png", "http://www.legalproductivity.com/wp-content/uploads/2013/05/firefox-300x300.png","http://pdl.warnerbros.com/wbol/uk/supermanreturns/webmaster/shield2.jpg","http://cdn.funcheap.com/wp-content/uploads/2011/03/Starbucks-New-Logo-300x3001.png","http://cdn.funcheap.com/wp-content/uploads/2011/03/Starbucks-New-Logo-300x3001.png","http://cdn.funcheap.com/wp-content/uploads/2011/03/Starbucks-New-Logo-300x3001.png" ], "username" : "arpit", "userimage" : "https://qph.ec.quoracdn.net/main-thumb-5744486-200-krg8c8s6D8kjcE2T9u3UoknYAssetQVA.jpeg", "publishdate" : "23-02-2045"})