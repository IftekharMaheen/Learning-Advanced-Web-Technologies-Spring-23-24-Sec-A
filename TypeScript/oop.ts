class Employee {
    private id: number;
    private name: string;
    protected age: number;
    public isOkay: boolean;
    constructor(id: number, name: string, age: number, isOkay: boolean){
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }

    display(): void {
        console.log(`ID = ${this.id}, Name = ${this.name}, Age = ${this.age}, IsOkay = ${this.isOkay}`);
    }
}

let emp = new Employee(1, "Steve", 21, true);
emp.display();