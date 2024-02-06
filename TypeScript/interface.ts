interface IEmployee {
    id: number;
    name: string;
    display(): void;
}

class EmployeeImp implements IEmployee {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    display(): void {
        console.log(`Id = ${this.id}, Name = ${this.name}`);
    }
}

let empImp = new EmployeeImp(1, "Stan");
empImp.display();