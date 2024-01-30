function fetchData(callback){
    setTimeout(() => {
        const data = "Hello, world!";
        callback(data);
    }, 2000);
}

function process(data){
    console.log("Data received: ", data);
}

console.log("Start");
fetchData(process);
console.log("End");