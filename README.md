#mdbmongooseproject# in git
to run the suite, npm start.
than rs so that mongo is connected.

Mocha: all javascript in the files test directory is run, e.g) console .log that are outside describe methods.
Hooks are run in the order of before, beforeEach, describe, ( before, beforeEach), it, (afterEach,after), afterEach, after.
Hooks that are not part of any suites are run before all the  hooks that are part of suite test cases.

