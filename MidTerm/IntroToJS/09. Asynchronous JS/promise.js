function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;

            if (success) {
                const data = "Hello, world!";
                resolve(data);
            }
            else{
                const error = "Failed to fetch data.";
                reject(error);
            }
        }, 2000);
    });
}

console.log("Start");

fetchData()
    .then(data => {
        console.log("Data received: ", data);
    })
    .catch(error => {
        console.error("Error: ", error);
    })
    .finally(() => {
        console.log("Operation complete.");
    });

console.log("End");