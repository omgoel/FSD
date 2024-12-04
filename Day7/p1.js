// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Data sent");
//     } else {
//         reject("Data Failed");
//     }
// });

// myPromise
//     .then((message) => {
//         console.log("Data Received: " + message); // Output when the promise is resolved
//     })
//     .catch((err) => {
//         console.log("Failed to fetch data: " + err); // Output when the promise is rejected
// });
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(()=>{
        if (success) {
            resolve("Data sent");
        } else {
            reject("Data Failed");
        }
    },4000)
});

myPromise
    .then((message) => {
        console.log("Data Received: " + message); // Output when the promise is resolved
    })
    .catch((err) => {
        console.log("Failed to fetch data: " + err); // Output when the promise is rejected
});