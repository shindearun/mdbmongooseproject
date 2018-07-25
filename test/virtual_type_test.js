const assert = require('assert');
const User = require('../src/user');

describe('Virtual types', () => {
  beforeEach((done) => {
    console.log('in virtual_test beforeEach');
    let joe = new User({ name: 'Arun',
    posts: [{ title: 'PostTitle' }, { title: 'PostTistle' }] });
    joe.save()
      .then(() => done());
  });
  it('postCount returns number of posts', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'PostTitle' }]
    });

    joe.save()
      .then(() => User.findOne({ name: 'Arun' }))
      .then((user) => {
        assert(user.postCount === 2); 
        done();
      });
  });
});