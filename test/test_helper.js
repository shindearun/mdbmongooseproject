const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

console.log('in test_helper first line');

before((done) => {
    console.log('in test_helper before method start');
  mongoose.connect('mongodb://localhost:27017/users_test', {
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30,
        useNewUrlParser: true
      });
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
   // console.log('in test_helper before method end');
});

beforeEach((done) => {
  console.log('in test_helper beforeEach method');
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});

 after(() =>{
    console.log('in test_helper after method');
    mongoose.connection.close;
    process.exit(0);
}); 