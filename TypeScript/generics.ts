function display<T>(id: T, name: T): void {
    console.log(`Id = ${id}, Name = ${name}`)
}

display<number | string>(101, "Oppo");
display<string>("102", "David");