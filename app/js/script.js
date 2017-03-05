'use strict';

var users = {
    user1: {
        name: 'Dimon',
        age: 24
    },
    user2: {
        name: 'Angelika',
        age: 21
    }
};
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(users);
    }, 4000);
    // throw new Error('errors');
    // reject(new Error('error1'));
});

promise.then(function onFulfilled(users) {
    console.log(users);
}, function (error) {
    console.log(error);
});