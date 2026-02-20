export class User {
    public firstname: string;
    public lastname: string;
    private age: number;

    static BIRTH_YEAR: number = 2000;

    constructor(){
        this.firstname = "";
        this.lastname = "";
        this.age = 0;

    }
    setFirstname(firstname: string): void {
    this.firstname = firstname;
    }

    setLastname(lastname: string): void {
    this.lastname = lastname;
    }

    setAge(age: number): void {
        if (age >= 0) {
      this.age = age;
    }
    }

    getAge(): number {
        return this.age;
    }

    getFullName(): string {
        const fullName = `${this.firstname} ${this.lastname}`.trim();
        return fullName;
    }
}
    
