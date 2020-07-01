export class User{
    name:string;
    email:string;
    password:string;

    constructor(values:any={}){
        Object.assign(this, values);
    }
}
