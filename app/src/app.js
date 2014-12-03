var User = require('core/models/User');
var user = new User();

var Cat = require('core/models/animals/Cat');
var cat = new Cat();

var Dog = require('core/models/animals/Dog');
var dog = new Dog();

var Donkey = require('core/models/animals/Donkey');
var donkey = new Donkey();


alert(  'Human says: ' + user.sayHello() +
        '\nCat says: ' + cat.sayHello() +
        '\nDog says: ' + dog.sayHello() +
        '\nDonkey says: ' + donkey.sayHello()
);
