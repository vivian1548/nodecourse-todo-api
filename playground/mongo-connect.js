const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log(`Unable to connect due to ${err}`);
  };

  console.log('connected to MongoDB');

  // db.collection('Todos').insertOne({
  //   name:"hello 1"
  // },(err,result)=>{
  //   if(err)
  //   {
  //     return console.log(`Unable to insert in Mongo due to ${err}`);
  //   };
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').find().toArray().then((docs)=>{
    console.log(docs);
  },(err)=>{
    console.log(err);
  })

  // db..insertOne({
  //   name:"vivian1",
  //   age:29,
  //   location:"Mumbai"
  // },(err,result)=>{
  //   if(err)
  //   {
  //     return console.log(`Unable to insert in Mongo due to ${err}`);
  //   };
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

})
