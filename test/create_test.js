const assert = require('assert');
const User = require('../src/user');

before((done) => {
    console.log('in create_test before method');
    done(); 
});

console.log('in create_test outside describe');

describe('Creating records', () => {
    console.log('in crete_test describe');

    beforeEach((done) => {
        console.log('in create_test beforeEach');
        done();
      });

  it('saves a user', (done) => {
    const joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => {
        // Has joe been saved successfully?
        assert(!joe.isNew);
        done();
      });
  });
  before((done) => {
    console.log('in create_test before method in describe');
    done(); 
});
});
