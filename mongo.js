var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/printr';

app.use(express.bodyParser());

app.post('/login', function(request, response){
    //console.log(request.body.username);
   // console.log(request.body.password);
    
    var findRestaurants = function(db, callback) {
   var cursor =db.collection('users').find({'username':request.body.username,'password':request.body.password});
   cursor.each(function(err, doc) {
      //console.log(doc);
      assert.equal(err, null);
      if (doc != null) {
        console.log("user is admin");
        response.send("admin");
        return false;
         //console.dir(doc);
         
      } else {
        console.log("user is normal user");
        response.send("normal user")
//  console.log("normal user");
      }
   });
    //if(username=="admin" && password=="admin"){
      //console.log("admin");
    //}
    //else console.log("normal user");
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db);
});
});

app.post('/api', function (req, res) {
  console.log(req.body.usertype);
  if(req.body.usertype!="admin")
    {
var globallist=[];
var findRestaurants = function(db, callback) {
   var cursor =db.collection('featuredItems').find({'status':'active'});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
      	globallist.push(doc);
         //console.dir(doc);
         
      } else {
  res.send(globallist);;
      }
   });

};
}
else {
  var globallist=[];
var findRestaurants = function(db, callback) {
   var cursor =db.collection('featuredItems').find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        globallist.push(doc);
         //console.dir(doc);
         
      } else {
  res.send(globallist);;
      }
   });

};
}
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db);
});
});

app.post('/addnew', function(request, response){
      


    var findRestaurants = function(db, callback) {
    console.log(request.body.addnew_name);
      console.log(request.body.addnew_tags);
      console.log(request.body.addnew_images);
      console.log(request.body.addnew_username);
      console.log(request.body.addnew_name);
      db.collection('featuredItems').insertOne(
      {  "status" : request.body.addnew_status,
      "name" : request.body.addnew_name,
      "tags" : (request.body.addnew_tags),
      "images" : (request.body.addnew_images),
      "username" : request.body.addnew_username,
      "userimage" : request.body.addnew_userphoto,
      "publishdate" : request.body.addnew_publish_date
    },
      function(err, results) {
      response.send("insert successfull");
   });
 //db.collection('restaurants').update({_id:ObjectID(request.body.ID)}, {$set: {status:request.body.value_}});


    //if(username=="admin" && password=="admin"){
      //console.log("admin");
    //}
    //else console.log("normal user");
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db);
});
});


app.post('/editentry', function(request, response){
    
    
    var findRestaurants = function(db, callback) {
      console.log(request.body.editentry_status);

      console.log(request.body.editentry_tags);
      //var {ObjectId} = require('mongodb'); //like ObjectId=require('mongodb').ObjectId;
      ObjectID = require('mongodb').ObjectID;
       _id =new  ObjectId(request.body.editentry_id); 
      db.collection('featuredItems').update(
      { _id: _id},
      {
        $set: { 
        "status" : request.body.editentry_status,
      "name" : request.body.editentry_name,
      "tags" : request.body.editentry_tags,
      "images" : (request.body.editentry_images),
      "username" : request.body.editentry_username,
      "userimage" : request.body.editentry_userphoto,
      "publishdate" : request.body.editentry_publishdate
         }
      }, function(err, results) {
      //console.log(results);
      console.log(err);
      response.send("edit done successfully");
   });
 //db.collection('restaurants').update({_id:ObjectID(request.body.ID)}, {$set: {status:request.body.value_}});


    //if(username=="admin" && password=="admin"){
      //console.log("admin");
    //}
    //else console.log("normal user");
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db);
});
});



app.post('/toggle', function(request, response){
    console.log(request.body.ID);
    console.log(request.body.value_);
    
    var findRestaurants = function(db, callback) {
      console.log(request.body.ID);
      //var {ObjectId} = require('mongodb'); //like ObjectId=require('mongodb').ObjectId;
      ObjectID = require('mongodb').ObjectID;
       _id =new  ObjectId(request.body.ID); 
      db.collection('featuredItems').update(
      { _id: _id},
      {
        $set: { "status": request.body.value_ }
      }, function(err, results) {
      console.log(results);
      console.log(err);
      response.send("update done successfully");
   });
 //db.collection('restaurants').update({_id:ObjectID(request.body.ID)}, {$set: {status:request.body.value_}});


    //if(username=="admin" && password=="admin"){
      //console.log("admin");
    //}
    //else console.log("normal user");
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db);
});
});





// Use compress middleware to gzip content
app.use(express.compress());

// Serve up content from public directory
app.use(express.static(__dirname + '/public'));


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

