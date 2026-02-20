export class User {
    public firstname: string;
    public lastname: string;
    private age: number;

    static BIRTH_YEAR: number = new Date().getFullYear();

    constructor(){
        this.firstname = "";
        this.lastname = "";
        this.age = 0;

    }
    setAge(age: number): void {
        if (age <= 0){
            this.age = age;
        }
    }


}
    
