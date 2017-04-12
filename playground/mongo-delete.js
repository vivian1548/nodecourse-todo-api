const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log(`Unable to connect due to ${err}`);
  };

  console.log('connected to MongoDB');

//   db.collection('Todos').deleteMany({name:"vivian"}).then((res)=>{
//     var a=JSON.stringify(res,undefined,2);
//     console.log(a);
//     console.log(`rows affected ${a.ok}`);
//   },(err)=>{
//     console.log(err);
//   })
//
// })

db.collection('Todos').findOneAndDelete({name:"vivian"}).then((res)=>{
  var a=JSON.stringify(res,undefined,2);
  console.log(a);
},(err)=>{
  console.log(err);
})

});
