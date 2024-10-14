// promise 

const promiseData = new Promise((success, fail) => {
    const isLog = false
    if (isLog == false) {
        fail("failed database")
    } else {
        success("welcome data base")

    }
});

(async () => {
    try {
        const result = await promiseData; // Wait for the promise to resolve or reject
        console.log(result); // This will run if the promise is resolved
    } catch (error) {
        console.error(error); // This will run if the promise is rejected
    }
})();



promiseData.then((success) => {
    console.log(success);
}).catch((fail) => {
    console.log(fail);
});