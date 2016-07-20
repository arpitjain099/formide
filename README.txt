1. The app consists of two screens -
	Login screen
	Main screen
2. The users can be of two types - Administrator and Normal Users. Administrator is currently identified by the credentials as 'username':'admin' and 'password':'admin'. Normal users are users with any credentials other than 'admin/admin'.
3. Normal users can see only entries with 'status' entries as 'active'. Administrator can see all the entries present in the database (irrespective of their status).
4. While normal users have "view only" rights, administrator can choose to change the status of the entries ('active' -> 'inactive' & 'inactive' -> 'active'). Administrator can also edit the details about the entries, and can even add new entries into the database.

The tech stack comprises of MongoDB, Node JS (for backend), and HTML, CSS, Javascript (for frontend). The API calls are made using jQuery post methods, and the state of the app (like whether the user type is 'administrator' or 'normal user') is stored using HTML5 localStorage variables.