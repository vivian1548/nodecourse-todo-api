const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log(`Unable to connect due to ${err}`);
  };

  console.log('connected to MongoDB');

  db.collection('Users').find({_id:new ObjectID('58ea4c1c71470f1e10ac6db4')}).toArray().then((docs)=>{
    console.log(docs);
  },(err)=>{
    console.log(err);
  })

})
