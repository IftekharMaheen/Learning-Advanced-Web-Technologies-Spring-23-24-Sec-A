function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

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

async function fetchDataAndProcess() {
    try {
        console.log("Start");

        const data = await fetchData();
        console.log("Data received: ", data);

        console.log("End");
    }
    catch (error) {
        console.error("Error: ", error);
    }
    finally {
        console.log("Operation completed");
    }
}

fetchDataAndProcess();