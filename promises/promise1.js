//resolve is directly connected to the then
//********************** PromiseOne ********************** */
// let promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task 1');
//         resolve()
//     }, 1000)
// })
// promiseOne.then(function () {
//     console.log("promises consumed")
// })

// //********************** PromiseTwo ********************** */
// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Asyn task 2")
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log("promise consumed")
// })

// ********************** PromiseThree ********************** */
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("provide variable through the resolve")
//         resolve({
//             username: "piyush",
//             place: "mumbai",
//             age: 21
//         })
//     }, 1000)
// })
// promiseThree.then((data) => {
//     console.log(data)
// })

// //********************** PromiseFour (.then .catch .finally) ********************** */
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "piyu", password: 123 })
//         }
//         else {
//             reject("Error , something went wrong ")
//         }
//     }, 1000);
// })
// promiseFour.then((user) => {  //user = {username:"piyu",password:123}
//     console.log(user);
//     return user.username;
// }).then(function (username) {  //username = user.username (piyu)
//     console.log(username)
// }).catch(function (error) {   //error = Error , something went wrong
//     console.log(error)
// }).finally(function () {   //always run
//     console.log("promise is either resolve or rejected")
// })

// //********************** PromiseFive (Asyn await) ********************** */
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "javaScript", password: 123 })
//         }
//         else {
//             reject("Error , JS went wrong ")
//         }
//     }, 1000);
// }).then((data) => console.log(data))
// .catch((error) => console.log(error));

//promise is object that why we consume that 
// async function consumePromiseFive() {
//     try {
//         const respone = await promiseFive
//         console.log(respone);
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()

